import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './create-user-dto.js';
import { UserService } from './user.service.js';
import { ResetPasswordDTO } from './reset-password-dto.js';
import { LoginDTO } from './login-dto.js';
@Controller('api')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/register')
  create(@Body() createUserDto: CreateUserDTO) {
    return this.userService.register(createUserDto);
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
  login(@Body() loginDTO: LoginDTO) {
    return this.userService.login(loginDTO);
  }
}
