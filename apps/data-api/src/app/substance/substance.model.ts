import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Substance extends Document {
  @Prop({ required: true })
  layerId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  concentration: string;

  @Prop({ required: true })
  volume: string;

  @Prop()
  safetyProtocol: string;

  @Prop()
  warnings: string;

  @Prop()
  description: string;
}

export const SubstanceSchema = SchemaFactory.createForClass(Substance);
