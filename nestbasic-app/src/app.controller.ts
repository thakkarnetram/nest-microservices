import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {User} from "./user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() createUserReq:User){
      this.appService.createUser(createUserReq)
  }

  @Get('/analytics')
  getAnalytics(){
      return this.appService.getAnalytics()
  }
}
