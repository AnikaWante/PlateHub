import { IsString } from 'class-validator';

export class CreateWellDto {
  @IsString()
  readonly elisaPlateId: string;

  @IsString()
  readonly wellNumber: string;

  @IsString()
  readonly description: string;
}