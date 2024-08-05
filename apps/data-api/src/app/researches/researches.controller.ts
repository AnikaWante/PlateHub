import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ResearchesService } from './researches.service';
import { Research } from './research.model';
import { CreateResearchDto } from './dto/create-research.dto';
import { UpdateResearchDto } from './dto/update-research.dto';

@Controller('researches')
export class ResearchesController {
  constructor(private readonly researchesService: ResearchesService) {}

  @Get()
  getAllResearches(): Promise<Research[]> {
    return this.researchesService.getAllResearches();
  }

  @Get(':id')
  getResearchById(@Param('id') id: string): Promise<Research> {
    return this.researchesService.getResearchById(id);
  }

  @Post()
  createResearch(
    @Body() createResearchDto: CreateResearchDto
  ): Promise<Research> {
    return this.researchesService.createResearch(createResearchDto);
  }

  @Put(':id')
  updateResearch(
    @Param('id') id: string,
    @Body() updateResearchDto: UpdateResearchDto
  ): Promise<Research> {
    return this.researchesService.updateResearch(id, updateResearchDto);
  }

  @Delete(':id')
  deleteResearch(@Param('id') id: string): Promise<Research> {
    return this.researchesService.deleteResearch(id);
  }
}
