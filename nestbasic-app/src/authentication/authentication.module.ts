import {Module} from '@nestjs/common';
import {AuthenticationService} from './authentication.service';
import {UsersModule} from "../users/users.module";
import {AuthenticationController} from "./authentication.controller";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
    imports: [UsersModule, JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
            secret: configService.get<string>('SECRET_KEY')
        }),
        inject: [ConfigService]
    }),
        ConfigModule.forRoot()
    ], // basically to use this in my other controller I have to import this
    providers: [AuthenticationService],
    controllers: [AuthenticationController]
})
export class AuthenticationModule {
}
