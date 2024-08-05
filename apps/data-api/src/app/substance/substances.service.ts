import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Substance } from './substance.model';
import { CreateSubstanceDto } from './dto/create-substance.dto';
import { UpdateSubstanceDto } from './dto/update-substance.dto';

@Injectable()
export class SubstancesService {
  constructor(@InjectModel(Substance.name) private substanceModel: Model<Substance>) {}

  async getAllSubstances(): Promise<Substance[]> {
    return this.substanceModel.find().exec();
  }

  async getSubstanceById(id: string): Promise<Substance> {
    return this.substanceModel.findById(id).exec();
  }

  async createSubstance(createSubstanceDto: CreateSubstanceDto): Promise<Substance> {
    const createdSubstance = new this.substanceModel(createSubstanceDto);
    return createdSubstance.save();
  }

  async updateSubstance(id: string, updateSubstanceDto: UpdateSubstanceDto): Promise<Substance> {
    return this.substanceModel.findByIdAndUpdate(id, updateSubstanceDto, { new: true }).exec();
  }

  async deleteSubstance(id: string): Promise<Substance> {
    return this.substanceModel.findByIdAndDelete(id).exec();
  }
}
