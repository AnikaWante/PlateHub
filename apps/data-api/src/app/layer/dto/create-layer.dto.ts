import { IsNumber, IsString } from 'class-validator';

export class CreateLayerDto {
  @IsString()
  readonly wellId: string;

  @IsNumber()
  readonly layerNumber: number;

  @IsString()
  readonly description: string;

  @IsString()
  readonly completionTime: string;
}
