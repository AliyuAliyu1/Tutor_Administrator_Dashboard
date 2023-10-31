import { Controller, Post } from '@nestjs/common';

@Controller('user')
export class usercontroller {
  @Post()
  addUser(): any {}
}
