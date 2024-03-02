import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request as expresRequest } from 'express';

import { Role } from './enums/rol.enum';
import { Auth } from './decorators/auth.decorator';

interface RequestWithUser extends expresRequest {
  user: { email: string; user_Id: string; rol: string };
}

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

  //   @Get('profile')
  //   @Roles(Role.ADMIN)
  //   @UseGuards(AuthGuard, RolesGuard)
  //   profile(
  //     @Request()
  //     req: RequestWithUser,
  //   ) {
  //     return this.authService.profile({
  //       email: req.user.email,
  //       role: req.user.rol,
  //     });
  //   }
  // }

  @Get('profile')
  @Auth(Role.ADMIN)
  profile(
    @Request()
    req: RequestWithUser,
  ) {
    return this.authService.profile({
      email: req.user.email,
      role: req.user.rol,
    });
  }
}
