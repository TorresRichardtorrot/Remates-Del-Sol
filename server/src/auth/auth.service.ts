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
  async register({ email, password, username }: RegisterUserDto) {
    try {
      const userFound = await this.usersService.findOneByEmail(email);

      if (userFound) {
        throw new BadRequestException('User already exists');
      }

      return await this.usersService.create({
        email,
        password: await bcryptjs.hash(password, 10),
        username,
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  }

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

      const payLoad = { userId: userFound._id, email: userFound.email };

      const token = await this.jwtService.signAsync(payLoad);
      return { userFound, token };
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
