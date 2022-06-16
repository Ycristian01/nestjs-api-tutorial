import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard) //all routes on controller have token validation
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) //@GetUser('email') email: string 
  {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number,
  @Body() dto: EditUserDto,) {
    return this.userService.editUser(userId, dto);
  }
}
