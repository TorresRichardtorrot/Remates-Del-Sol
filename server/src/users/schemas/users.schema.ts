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
}

export const UsersSchema = SchemaFactory.createForClass(Users);
