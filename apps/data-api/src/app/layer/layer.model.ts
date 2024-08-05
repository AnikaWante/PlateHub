import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Layer extends Document {
  @Prop({ required: true })
  wellId: string;

  @Prop({ required: true })
  layerNumber: number;

  @Prop()
  description: string;

  @Prop()
  completionTime: string;
}

export const LayerSchema = SchemaFactory.createForClass(Layer);
