import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Customer extends Document {
  @Prop({ required: true })
  vehicleNo: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  mobileNo: string;

  @Prop({ default: null })
  address: string;

  @Prop({ default: null })
  email: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

const CustomerSchema = SchemaFactory.createForClass(Customer);

export { CustomerSchema };
