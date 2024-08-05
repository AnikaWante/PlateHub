import { IsBooleanString, IsDateString, IsString } from 'class-validator';

export class CreateResearchDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsDateString()
  readonly startDate: Date;

  @IsDateString()
  readonly endDate: Date;

  @IsBooleanString()
  readonly finished: boolean;
}
