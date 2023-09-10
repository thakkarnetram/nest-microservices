import {Controller, Post, Body, HttpCode, HttpStatus} from '@nestjs/common';
import {AuthenticationService} from "./authentication.service";


@Controller('api/auth/')
export class AuthenticationController {
    constructor(private authService: AuthenticationService) {
    }

    @HttpCode(HttpStatus.OK)
    @Post("signup")
    signInUser(@Body() signInDto: Record<string, any>) {
        return this.authService.signInUser(signInDto.name, signInDto.pass)
    }
}
