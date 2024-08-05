import { IsString } from 'class-validator';

export class CreateSubstanceDto {
  @IsString()
  readonly layerId: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly concentration: string;

  @IsString()
  readonly volume: string;

  @IsString()
  readonly safetyProtocol: string;

  @IsString()
  readonly warnings: string;

  @IsString()
  readonly description: string;
}
