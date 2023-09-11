import {Inject, Injectable} from '@nestjs/common';
import {User} from "./user.dto";
import {ClientProxy} from "@nestjs/microservices";
import {CreateUserEvent} from "./create-user.event";

@Injectable()
export class AppService {
    private readonly users: any[] = [];

    constructor(@Inject('COMMUNICATION') private readonly comsClient: ClientProxy,
                @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
    ) {
    }

    getHello(): string {
        return 'Hello World!';
    }

    createUser(createUserReq: User) {
        this.users.push(createUserReq);
        this.comsClient.emit(
            'user-created',
            new CreateUserEvent(createUserReq.email)
        )
        this.analyticsClient.emit(
            'user-created',
            new CreateUserEvent(createUserReq.email)
        )
    }

    getAnalytics(){
        return this.analyticsClient.send({cmd:'get_analytics'},{})
    }
}
