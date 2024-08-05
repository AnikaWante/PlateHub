import { IsBooleanString, IsDateString, IsInt, IsString } from 'class-validator';

export class CreateElisaPlateDto {
  @IsString()
  readonly researchId: string;

  @IsInt()
  readonly plateNumber: number;

  @IsDateString()
  readonly createdDate: Date;

  @IsString()
  readonly description: string;

  @IsBooleanString()
  readonly private: boolean;
}
