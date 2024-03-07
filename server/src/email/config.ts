import { ConfigService, ConfigModule } from '@nestjs/config';
ConfigModule.forRoot({
  envFilePath: `${process.env.NODE_ENV}`,
});
const configService = new ConfigService();
export const transport = {
  host: configService.get('SMTP_HOST'),
  port: configService.get('SMTP_PORT'),
  secure: false,
  auth: {
    user: configService.get('SMTP_USER'),
    pass: configService.get('SMTP_PASS'),
  },
};
