import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  //?Register
  async register({ email, password, username }: RegisterUserDto) {
    try {
      const userFound = await this.usersService.findOneByEmail(email);

      if (userFound) {
        throw new BadRequestException('User already exists');
      }

      await this.usersService.create({
        email,
        password: await bcryptjs.hash(password, 10),
        username,
      });

      return {
        username,
        email,
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  //?Login
  async login({ email, password }: LoginDto) {
    try {
      const userFound = await this.usersService.findOneByEmail(email);

      if (!userFound) {
        throw new NotFoundException('User not Found');
      }

      const isValidate = await bcryptjs.compare(password, userFound.password);
      if (!isValidate) {
        throw new UnauthorizedException('incorrect credentials');
      }

      const payLoad = {
        user_Id: userFound._id,
        email: userFound.email,
        role: userFound.roles,
      };

      const token = await this.jwtService.signAsync(payLoad);
      return { token };
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  //?Profile
  async profile({ email, role }: { email: string; role: string }) {
    console.log(role);
    return this.usersService.findOneByEmail(email);
  }
}
