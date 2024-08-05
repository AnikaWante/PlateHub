import { PartialType } from '@nestjs/mapped-types';
import { CreateElisaPlateDto } from './create-elisa-plate.dto';

export class UpdateElisaPlateDto extends PartialType(CreateElisaPlateDto) {}
