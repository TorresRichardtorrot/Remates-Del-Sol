import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { SendEmail } from './dto/sendEmail.dto';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail({ to, subject, text }: SendEmail) {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        text,
      });
      this.logger.log('Email sent successfully');
    } catch (error) {
      console.log(error);
      this.logger.error('Error sending email');
      throw error;
    }
  }
}
