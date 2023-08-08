import { Controller, Get, Request, BadRequestException } from '@nestjs/common'; 
import { UserMessagesHelper } from './helpers/messages.helper';
import { UserService } from './user.service';

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
}