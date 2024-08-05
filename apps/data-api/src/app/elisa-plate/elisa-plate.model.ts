import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ElisaPlate extends Document {
  @Prop({ required: true })
  researchId: string;

  @Prop({ required: true })
  plateNumber: number;

  @Prop({ required: true })
  createdDate: Date;

  @Prop()
  description: string;

  @Prop()
  private: boolean;
}

export const ElisaPlateSchema = SchemaFactory.createForClass(ElisaPlate);
