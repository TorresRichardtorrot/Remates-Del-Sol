import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { transport } from './config';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: transport,
    }),
  ],
  providers: [EmailService],
  controllers: [EmailController],
})
export class EmailModule {}
