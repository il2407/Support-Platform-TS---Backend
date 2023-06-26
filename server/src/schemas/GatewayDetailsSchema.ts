import mongoose, { Document, Schema } from 'mongoose';

export interface GatewayDetailsDocument extends Document {
  gateway_name: String,
  alternative_channels: String,
  escalation_path: String,
  gw_requirements: String,
  required_fields_examples: String,
  phone_number: String,
  region: String,
  notes: String,
  network: String,
}

const gatewayDetailsSchema : Schema<GatewayDetailsDocument> = new Schema<GatewayDetailsDocument>({
  _id: mongoose.Types.ObjectId,
  gateway_name: { type: String, required: false },
  alternative_channels: { type: String, required: false },
  escalation_path: { type: String, required: false },
  gw_requirements: { type: String, required: false },
  required_fields_examples: { type: String, required: false },
  phone_number: { type: String, required: false },
  region: { type: String, required: false },
  notes: { type: String, required: false },
  network: { type: String, required: false },
});


export default mongoose.model<GatewayDetailsDocument>('GatewayDetails', gatewayDetailsSchema);
