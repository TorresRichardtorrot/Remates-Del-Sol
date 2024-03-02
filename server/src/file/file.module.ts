import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { MulterModule } from '@nestjs/platform-express';
import { FileController } from './file.controller';

@Module({
  imports: [
    MulterModule.register({
      dest: '../../public',
    }),
  ],
  providers: [FileService],
  controllers: [FileController],
})
export class FileModule {}
