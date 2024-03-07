import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot({
  envFilePath: `${process.env.NODE_ENV}`,
});

const configService = new ConfigService();

export const jwtConstants = {
  secret: configService.get('JWT_SECRET'),
};
