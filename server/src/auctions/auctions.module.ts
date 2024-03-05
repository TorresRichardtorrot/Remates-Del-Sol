import { Module } from '@nestjs/common';
import { AuctionsController } from './auctions.controller';
import { AuctionsService } from './auctions.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  upComingAuctions,
  upComingAuctionsSchema,
} from './schemas/upComing.auctions.schema';
import {
  specialAuctions,
  specialAuctionsSchema,
} from './schemas/specialAuctions';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: upComingAuctions.name, schema: upComingAuctionsSchema },
    ]),
    MongooseModule.forFeature([
      { name: specialAuctions.name, schema: specialAuctionsSchema },
    ]),
  ],
  controllers: [AuctionsController],
  providers: [AuctionsService],
  exports: [AuctionsService],
})
export class AuctionsModule {}
