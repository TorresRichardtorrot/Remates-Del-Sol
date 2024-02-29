import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export
@Schema({
  timestamps: false,
  versionKey: false,
})
class Users {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  username: string;

  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  email: string;

  @Prop({
    required: true,
    trim: true,
  })
  password: string;

  @Prop({
    required: true,
    trim: true,
    enum: ['admin', 'client', 'superAdmin'],
    default: 'client',
  })
  rol: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
