import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Well } from './well.model';
import { CreateWellDto } from './dto/create-well.dto';
import { UpdateWellDto } from './dto/update-well.dto';

@Injectable()
export class WellsService {
  constructor(@InjectModel(Well.name) private wellModel: Model<Well>) {}

  async getAllWells(): Promise<Well[]> {
    return this.wellModel.find().exec();
  }

  async getWellById(id: string): Promise<Well> {
    return this.wellModel.findById(id).exec();
  }

  async createWell(createWellDto: CreateWellDto): Promise<Well> {
    const createdWell = new this.wellModel(createWellDto);
    return createdWell.save();
  }

  async updateWell(id: string, updateWellDto: UpdateWellDto): Promise<Well> {
    return this.wellModel.findByIdAndUpdate(id, updateWellDto, { new: true }).exec();
  }

  async deleteWell(id: string): Promise<Well> {
    return this.wellModel.findByIdAndDelete(id).exec();
  }
}
