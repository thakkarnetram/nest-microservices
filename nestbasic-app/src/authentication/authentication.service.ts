import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthenticationService {
    constructor(private userService: UsersService , private jwtService:JwtService) {
    }
    async signInUser(name: string, pass: string): Promise<any> {
      try{
          console.log(pass)
          const user = await this.userService.findOneUser(name);
          if (user?.password !== pass) {
              throw new HttpException('Invalid Password', HttpStatus.FORBIDDEN);
          }
          const payload = {sub:user._id,name:user.name,email:user.email}
          return {
              jwtToken:await this.jwtService.signAsync(payload)
          };
      }
      catch (e) {
            console.log(e)
      }
    }
}

// Comments
// using password , ...result
// excludes the password from coming in response
// String , string is different in TS
// The Payload is basically just like we give Email to make the token's payload tht is DATA