import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../guard';

@UseGuards(JwtGuard) //all routes on controller have token validation
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) //@GetUser('email') email: string 
  {
    return user;
  }

  @Patch()
  editUser() {
  }
}
