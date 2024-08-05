import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Well extends Document {
  @Prop({ required: true })
  elisaPlateId: string;

  @Prop({ required: true })
  wellNumber: string;

  @Prop()
  description: string;
}

export const WellSchema = SchemaFactory.createForClass(Well);
