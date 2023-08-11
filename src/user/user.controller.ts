import { Controller, Get, Request, BadRequestException, Body, Put, HttpCode, HttpStatus } from '@nestjs/common'; 
import { UserMessagesHelper } from './helpers/messages.helper';
import { UserService } from './user.service';
import { UpdateUserDto } from 'src/auth/dtos/updateuser.dto';

@Controller("user")
export class UserController {
  constructor(
    private readonly service: UserService) { }

  @Get()
  async getUser(@Request() req) {
    const {userId} = req?.user;
    const result = await this.service.getUserById(userId);

    return {
      name: result.name,
      email: result.email,
      avatar: result.avatar,
      id: result._id.toString()
    };
  }

@Put()
@HttpCode(HttpStatus.OK)
  async updateUser(@Request() req, @Body() dto: UpdateUserDto){
    const {userId} = req?.user;
    await this.service.updateUser(userId, dto);

} 

}