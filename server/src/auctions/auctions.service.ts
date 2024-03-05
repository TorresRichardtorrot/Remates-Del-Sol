import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { upComingAuctions } from './schemas/upComing.auctions.schema';
import { Model } from 'mongoose';
import { CreateUpComingAuctions } from './dto/createAuctions';
import { specialAuctions } from './schemas/specialAuctions';
import { CreateSpecialAuction } from './dto/createSpecialAuction';

@Injectable()
export class AuctionsService {
  constructor(
    @InjectModel(specialAuctions.name)
    readonly specialAuctionModel: Model<specialAuctions>,
    @InjectModel(upComingAuctions.name)
    readonly upComingAuctionModel: Model<upComingAuctions>,
  ) {}

  async createupUpComingAuctions(
    createUpcomingAuction: CreateUpComingAuctions,
  ) {
    try {
      const auctions = new this.upComingAuctionModel(createUpcomingAuction);
      return await auctions.save();
    } catch (error) {
      console.log(error);
    }
  }

  async createSpecialAuctions(createSpecialAuctions: CreateSpecialAuction) {
    try {
      const auctions = new this.specialAuctionModel(createSpecialAuctions);
      return await auctions.save();
    } catch (error) {
      console.log(error);
    }
  }
}
