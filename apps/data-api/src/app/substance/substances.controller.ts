import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { SubstancesService } from './substances.service';
import { Substance } from './substance.model';
import { CreateSubstanceDto } from './dto/create-substance.dto';
import { UpdateSubstanceDto } from './dto/update-substance.dto';

@Controller('substances')
export class SubstancesController {
  constructor(private readonly substancesService: SubstancesService) {}

  @Get()
  getAllSubstances(): Promise<Substance[]> {
    return this.substancesService.getAllSubstances();
  }

  @Get(':id')
  getSubstanceById(@Param('id') id: string): Promise<Substance> {
    return this.substancesService.getSubstanceById(id);
  }

  @Post()
  createSubstance(
    @Body() createSubstanceDto: CreateSubstanceDto
  ): Promise<Substance> {
    return this.substancesService.createSubstance(createSubstanceDto);
  }

  @Put(':id')
  updateSubstance(
    @Param('id') id: string,
    @Body() updateSubstanceDto: UpdateSubstanceDto
  ): Promise<Substance> {
    return this.substancesService.updateSubstance(id, updateSubstanceDto);
  }

  @Delete(':id')
  deleteSubstance(@Param('id') id: string): Promise<Substance> {
    return this.substancesService.deleteSubstance(id);
  }
}
