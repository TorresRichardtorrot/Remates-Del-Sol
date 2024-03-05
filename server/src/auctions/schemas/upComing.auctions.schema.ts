import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export
@Schema({
  timestamps: true,
  versionKey: false,
})
class upComingAuctions {
  @Prop({
    required: true,
    trim: true,
  })
  upcoming_auctions: string[];
}

export const upComingAuctionsSchema =
  SchemaFactory.createForClass(upComingAuctions);
