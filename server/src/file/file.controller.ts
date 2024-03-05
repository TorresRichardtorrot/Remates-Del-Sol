import {
  // Body,
  Controller,
  // Delete,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { storage } from './helpers/storage.helper';
import { fileFilter } from './helpers/fileFilter.helper';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/rol.enum';
import { FileService } from './file.service';

@Controller('api/upload')
export class FileController {
  constructor(private fileService: FileService) {}
  @Post()
  @Auth(Role.SUPER_ADMIN)
  @UseInterceptors(
    FilesInterceptor('array', 10, {
      storage: storage,
      fileFilter: fileFilter,
    }),
  )
  async specialAuctionFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    return this.fileService.saveFile(files);
  }

  // @Delete()
  // @Auth(Role.SUPER_ADMIN)
  // async deleteImage(@Body() : {pathImage :string}){
  // }
}
