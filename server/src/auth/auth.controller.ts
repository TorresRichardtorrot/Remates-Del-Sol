import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  register(
    @Body()
    req: RegisterUserDto,
  ) {
    return this.authService.register(req);
  }

  @Post('login')
  login(
    @Body()
    req: LoginDto,
  ) {
    return this.authService.login(req);
  }
}
