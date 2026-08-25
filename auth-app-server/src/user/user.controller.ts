import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CreateUserDTO } from './create-user-dto.js';
import { UserService } from './user.service.js';
import { ResetPasswordDTO } from './reset-password-dto.js';
import { LoginDTO } from './login-dto.js';
import type { Response } from 'express';
@Controller('api')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/register')
  async create(
    @Body() createUserDto: CreateUserDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const token = await this.userService.register(createUserDto);
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    });
    return { message: 'Welcome to auth app' };
  }
  @Get('/users')
  getUsers() {
    return this.userService.getUsers();
  }
  @Get('/user/:id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
  @Put('/reset-password')
  resetPassword(@Body() resetPasswordDTO: ResetPasswordDTO) {
    return this.userService.resetUserPassword(resetPasswordDTO);
  }
  @Post('/login')
  async login(
    @Body() loginDTO: LoginDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const token = await this.userService.login(loginDTO);
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    });
    return { message: 'Welcome to auth app' };
  }
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    return {
      message: 'Logged out successfully',
    };
  }
}
