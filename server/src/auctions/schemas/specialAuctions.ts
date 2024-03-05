import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export
@Schema({
  timestamps: true,
  versionKey: false,
})
class specialAuctions {
  @Prop({
    required: true,
    trim: true,
  })
  special_auctions: string[];
}

export const specialAuctionsSchema =
  SchemaFactory.createForClass(specialAuctions);
