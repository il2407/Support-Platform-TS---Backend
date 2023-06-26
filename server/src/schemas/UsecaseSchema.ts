import mongoose, { Document, Schema } from 'mongoose';

export interface UsecaseDocument extends Document {
  subject: string;
  description: string;
  action: string;
  salesforce_action: string;
  notes: string;
}

const useCaseSchema: Schema<UsecaseDocument> = new Schema<UsecaseDocument>({
  _id: mongoose.Types.ObjectId,
  subject: { type: String, required: true },
  description: [{ type: String, required: true }],
  action: { type: String, required: true },
  salesforce_action: { type: String, required: true },
  notes: { type: String, required: false },
});

export default mongoose.model<UsecaseDocument>('UseCase', useCaseSchema);
