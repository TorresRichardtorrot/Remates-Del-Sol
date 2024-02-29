import { Injectable } from '@nestjs/common';
import { Users } from './schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsersDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  async create(createUser: CreateUsersDto) {
    const newUser = new this.usersModel(createUser);
    return await newUser.save();
  }

  async findOneByEmail(email: string) {
    return await this.usersModel.findOne({ email });
  }
}
