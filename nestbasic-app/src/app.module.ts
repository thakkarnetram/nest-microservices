import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthenticationModule} from './authentication/authentication.module';
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [AuthenticationModule, UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
