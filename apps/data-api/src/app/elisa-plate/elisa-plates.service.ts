import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ElisaPlate } from './elisa-plate.model';
import { CreateElisaPlateDto } from './dto/create-elisa-plate.dto';
import { UpdateElisaPlateDto } from './dto/update-elisa-plate.dto';

@Injectable()
export class ElisaPlatesService {
  constructor(
    @InjectModel(ElisaPlate.name) private elisaPlateModel: Model<ElisaPlate>
  ) {}

  async getAllElisaPlates(): Promise<ElisaPlate[]> {
    return this.elisaPlateModel.find().exec();
  }

  async getElisaPlateById(id: string): Promise<ElisaPlate> {
    return this.elisaPlateModel.findById(id).exec();
  }

  async createElisaPlate(
    createElisaPlateDto: CreateElisaPlateDto
  ): Promise<ElisaPlate> {
    const createdElisaPlate = new this.elisaPlateModel(createElisaPlateDto);
    return createdElisaPlate.save();
  }

  async updateElisaPlate(
    id: string,
    updateElisaPlateDto: UpdateElisaPlateDto
  ): Promise<ElisaPlate> {
    return this.elisaPlateModel
      .findByIdAndUpdate(id, updateElisaPlateDto, { new: true })
      .exec();
  }

  async deleteElisaPlate(id: string): Promise<ElisaPlate> {
    return this.elisaPlateModel.findByIdAndDelete(id).exec();
  }
}
