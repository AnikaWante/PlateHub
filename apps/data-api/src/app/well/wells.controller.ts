import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { WellsService } from './wells.service';
import { Well } from './well.model';
import { CreateWellDto } from './dto/create-well.dto';
import { UpdateWellDto } from './dto/update-well.dto';

@Controller('wells')
export class WellsController {
  constructor(private readonly wellsService: WellsService) {}

  @Get()
  getAllWells(): Promise<Well[]> {
    return this.wellsService.getAllWells();
  }

  @Get(':id')
  getWellById(@Param('id') id: string): Promise<Well> {
    return this.wellsService.getWellById(id);
  }

  @Post()
  createWell(@Body() createWellDto: CreateWellDto): Promise<Well> {
    return this.wellsService.createWell(createWellDto);
  }

  @Put(':id')
  updateWell(
    @Param('id') id: string,
    @Body() updateWellDto: UpdateWellDto
  ): Promise<Well> {
    return this.wellsService.updateWell(id, updateWellDto);
  }

  @Delete(':id')
  deleteWell(@Param('id') id: string): Promise<Well> {
    return this.wellsService.deleteWell(id);
  }
}
