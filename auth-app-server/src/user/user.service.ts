import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CreateUserDTO } from './create-user-dto.js';
import bcrypt from 'bcryptjs';
import { ResetPasswordDTO } from './reset-password-dto.js';
import { LoginDTO } from './login-dto.js';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  // -----------------
  async register({ firstName, lastName, email, password }: CreateUserDTO) {
    const checkEmail = await this.prisma.user.findFirst({
      where: { email },
    });
    if (checkEmail)
      throw new UnauthorizedException(
        'This mail is already registered, please try to login',
      );
    const hashedPassword = await this.encryptPassword(password, 10);
    await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });
    // create jwt
    const token = await this.jwtService.signAsync({
      email,
    });
    return { token };
  }
  async encryptPassword(plainText: string, saltRound: number) {
    return await bcrypt.hash(plainText, saltRound);
  }
  // -----------------
  async getUsers() {
    return await this.prisma.user.findMany();
  }
  // -----------------
  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id: id },
      select: {
        firstName: true,
        lastName: true,
        email: true,
      },
    });
  }
  // -----------------
  async resetUserPassword({ email, password }: ResetPasswordDTO) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) throw new NotFoundException('User Not Found!');
    const hashedPassword = await this.encryptPassword(password, 10);
    await this.prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
      },
    });
    return { message: 'Password reset successfully' };
  }
  // -----------------
  async login({ email, password }: LoginDTO) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid || !user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // create jwt
    const token = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
    });
    return {
      token,
    };
  }
}
