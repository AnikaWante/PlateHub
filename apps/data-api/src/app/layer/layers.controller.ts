import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LayersService } from './layers.service';
import { Layer } from './layer.model';
import { CreateLayerDto } from './dto/create-layer.dto';
import { UpdateLayerDto } from './dto/update-layer.dto';

@Controller('layers')
export class LayersController {
  constructor(private readonly layersService: LayersService) {}

  @Get()
  getAllLayers(): Promise<Layer[]> {
    return this.layersService.getAllLayers();
  }

  @Get(':id')
  getLayerById(@Param('id') id: string): Promise<Layer> {
    return this.layersService.getLayerById(id);
  }

  @Post()
  createLayer(@Body() createLayerDto: CreateLayerDto): Promise<Layer> {
    return this.layersService.createLayer(createLayerDto);
  }

  @Put(':id')
  updateLayer(
    @Param('id') id: string,
    @Body() updateLayerDto: UpdateLayerDto
  ): Promise<Layer> {
    return this.layersService.updateLayer(id, updateLayerDto);
  }

  @Delete(':id')
  deleteLayer(@Param('id') id: string): Promise<Layer> {
    return this.layersService.deleteLayer(id);
  }
}
