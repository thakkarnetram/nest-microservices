import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {EventPattern, MessagePattern} from "@nestjs/microservices";
import {CreatedUserEvent} from "./created-user.event";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @EventPattern('user-created')
    handleUserCreated(data: CreatedUserEvent) {
        this.appService.handleUserCreated(data)
    }

    @MessagePattern({cmd: 'get_analytics'})
    getAnalytics() {
        this.appService.getAnalytics()
    }
}
