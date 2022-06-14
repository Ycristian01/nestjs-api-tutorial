import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/guard';

@UseGuards(JwtGuard) //all routes on controller have token validation
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    console.log(user);
    return user;
  }

  @Patch()
  editUser() {

  }
}
