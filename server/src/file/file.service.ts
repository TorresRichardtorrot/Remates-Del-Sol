import { Injectable } from '@nestjs/common';
import { AuctionsService } from 'src/auctions/auctions.service';

@Injectable()
export class FileService {
  constructor(private readonly auctionsService: AuctionsService) {}

  async saveFile(file: any[]) {
    try {
      console.log(file);
      return file;
    } catch (error) {
      console.log(error);
    }
  }
}
