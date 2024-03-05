import { IsEmail, IsString } from 'class-validator';

export class SendEmail {
  @IsString()
  text: string;
  @IsEmail()
  to: string;
  @IsString()
  subject: string;
}
