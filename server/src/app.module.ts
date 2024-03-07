import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FileModule } from './file/file.module';
import { EmailModule } from './email/email.module';
import { AuctionsModule } from './auctions/auctions.module';
import mongoose from 'mongoose';

console.log(join(__dirname, '..', '..', '/client/dist'));

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: join(__dirname, '..', 'public'),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client', 'dist', 'index.html'),
    }),
    MongooseModule.forRootAsync({
      useFactory: async () => {
        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri);
        console.log('*** Connected Database ***');
        return {
          uri: uri,
        };
      },
    }),
    AuctionsModule,
    AuthModule,
    UsersModule,
    FileModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
