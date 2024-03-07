/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(express.static(join(__dirname, '..', '..', 'client', 'dist')));
  await app.listen(process.env.PORT, () => {
    console.log(`*** Server Activo PORT:${process.env.PORT} ***`);
  });
}
bootstrap();
