import { IsArray, Min } from 'class-validator';

export class CreateSpecialAuction {
  @IsArray()
  @Min(1)
  special_auctions: string[];
}
