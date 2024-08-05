import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Layer } from './layer.model';
import { CreateLayerDto } from './dto/create-layer.dto';
import { UpdateLayerDto } from './dto/update-layer.dto';

@Injectable()
export class LayersService {
  constructor(@InjectModel(Layer.name) private layerModel: Model<Layer>) {}

  async getAllLayers(): Promise<Layer[]> {
    return this.layerModel.find().exec();
  }

  async getLayerById(id: string): Promise<Layer> {
    return this.layerModel.findById(id).exec();
  }

  async createLayer(createLayerDto: CreateLayerDto): Promise<Layer> {
    const createdLayer = new this.layerModel(createLayerDto);
    return createdLayer.save();
  }

  async updateLayer(id: string, updateLayerDto: UpdateLayerDto): Promise<Layer> {
    return this.layerModel.findByIdAndUpdate(id, updateLayerDto, { new: true }).exec();
  }

  async deleteLayer(id: string): Promise<Layer> {
    return this.layerModel.findByIdAndDelete(id).exec();
  }
}
