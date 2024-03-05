import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendEmail } from './dto/sendEmail.dto';

@Controller('api/email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post()
  sendEmail(@Body() body: SendEmail) {
    return this.emailService.sendEmail(body);
  }
}
