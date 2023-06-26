import mongoose, { Document, Schema } from 'mongoose';

export interface OnGoingDocument extends Document {
  reporter: String,
  case: [String],
  date_reported: String,
  eta: String,
  subject: String,
  task: String,
  required_actions: String,
  contact: String,
  ongoing_type: String,
}

const onGoingSchema : Schema<OnGoingDocument> = new Schema<OnGoingDocument>({
  _id: mongoose.Types.ObjectId,
  reporter: { type: String, required: false },
  case: [{ type: String, required: false }],
  date_reported: { type: String, required: false },
  eta: { type: String, required: false },
  subject: { type: String, required: false },
  task: { type: String, required: false },
  required_actions: { type: String, required: false },
  contact: { type: String, required: false },
  ongoing_type: { type: String, required: false },
});


export default mongoose.model<OnGoingDocument>('OnGoing', onGoingSchema);
