import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from 'src/user/dtos/register.dto';
import { isPublic } from './decorators/ispublic.decorator';

@Controller("auth")
    export class AuthController {
        constructor(private readonly service: AuthService) { }

    @Post('login')
    @isPublic()
    @HttpCode(HttpStatus.OK)
    login(@Body() dto: LoginDto) {
         return this.service.login(dto);
}

    @Post('register')
    @isPublic()
    @HttpCode(HttpStatus.OK)
    register(@Body() dto: RegisterDto) {
        return this.service.register(dto);
    }
}