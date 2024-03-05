import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { MulterModule } from '@nestjs/platform-express';
import { FileController } from './file.controller';
import { AuctionsModule } from 'src/auctions/auctions.module';

@Module({
  imports: [
    AuctionsModule,
    MulterModule.register({
      dest: '../../public',
    }),
  ],
  providers: [FileService, AuctionsModule],
  controllers: [FileController],
})
export class FileModule {}
