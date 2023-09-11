import { Injectable } from '@nestjs/common';
import {CreatedUserEvent} from "./created-user.event";

@Injectable()
export class AppService {
  public readonly analytics : any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data :CreatedUserEvent) {
    console.log("ANALYTICS SERVICE -> " , {email:data.email})
    this.analytics.push({
      email:data.email,
      timeStamp:new Date()
    })
  }

  getAnalytics(){
    return this.analytics;
  }
}
