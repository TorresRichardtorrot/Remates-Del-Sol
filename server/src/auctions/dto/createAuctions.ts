import { IsArray, Min } from 'class-validator';

export class CreateUpComingAuctions {
  @IsArray()
  @Min(1)
  upcoming_auctions: string[];
}
