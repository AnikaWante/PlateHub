import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Research } from './research.model';
import { CreateResearchDto } from './dto/create-research.dto';
import { UpdateResearchDto } from './dto/update-research.dto';

@Injectable()
export class ResearchesService {
  constructor(
    @InjectModel(Research.name) private researchModel: Model<Research>
  ) {}

  async getAllResearches(): Promise<Research[]> {
    return this.researchModel.find().exec();
  }

  async getResearchById(id: string): Promise<Research> {
    return this.researchModel.findById(id).exec();
  }

  async createResearch(
    createResearchDto: CreateResearchDto
  ): Promise<Research> {
    const createdResearch = new this.researchModel(createResearchDto);
    return createdResearch.save();
  }

  async updateResearch(
    id: string,
    updateResearchDto: UpdateResearchDto
  ): Promise<Research> {
    return this.researchModel
      .findByIdAndUpdate(id, updateResearchDto, { new: true })
      .exec();
  }

  async deleteResearch(id: string): Promise<Research> {
    return this.researchModel.findByIdAndDelete(id).exec();
  }
}
