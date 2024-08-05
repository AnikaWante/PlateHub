import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ElisaPlatesService } from './elisa-plates.service';
import { ElisaPlate } from './elisa-plate.model';
import { CreateElisaPlateDto } from './dto/create-elisa-plate.dto';
import { UpdateElisaPlateDto } from './dto/update-elisa-plate.dto';

@Controller('elisa-plates')
export class ElisaPlatesController {
  constructor(private readonly elisaPlatesService: ElisaPlatesService) {}

  @Get()
  getAllElisaPlates(): Promise<ElisaPlate[]> {
    return this.elisaPlatesService.getAllElisaPlates();
  }

  @Get(':id')
  getElisaPlateById(@Param('id') id: string): Promise<ElisaPlate> {
    return this.elisaPlatesService.getElisaPlateById(id);
  }

  @Post()
  createElisaPlate(
    @Body() createElisaPlateDto: CreateElisaPlateDto
  ): Promise<ElisaPlate> {
    return this.elisaPlatesService.createElisaPlate(createElisaPlateDto);
  }

  @Put(':id')
  updateElisaPlate(
    @Param('id') id: string,
    @Body() updateElisaPlateDto: UpdateElisaPlateDto
  ): Promise<ElisaPlate> {
    return this.elisaPlatesService.updateElisaPlate(id, updateElisaPlateDto);
  }

  @Delete(':id')
  deleteElisaPlate(@Param('id') id: string): Promise<ElisaPlate> {
    return this.elisaPlatesService.deleteElisaPlate(id);
  }
}
