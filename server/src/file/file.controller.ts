import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('api/upload')
export class FileController {
  @Post()
  @UseInterceptors(
    FilesInterceptor('array', 10, {
      storage: diskStorage({
        destination: '../../public/img',
        filename(req: any, file:Express.Multer.File[], callback) {
            
        },
      }),
    }),
  )
  async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return 'hola';
  }
}
