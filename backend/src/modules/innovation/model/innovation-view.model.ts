import mongoose, { Schema, Document } from 'mongoose';

export interface IInnovationView extends Document {
  innovation: mongoose.Types.ObjectId | string;
  viewer?: mongoose.Types.ObjectId | string;
  ipHash: string;
  lastViewedAt: Date;
  viewCount: number;
}

const InnovationViewSchema = new Schema<IInnovationView>(
  {
    innovation: {
      type: Schema.Types.ObjectId,
      ref: 'Innovation',
      required: true,
      index: true,
    },
    viewer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      index: true,
    },
    ipHash: {
      type: String,
      required: true,
      index: true,
    },
    lastViewedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
    viewCount: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

InnovationViewSchema.index({ innovation: 1, viewer: 1, ipHash: 1 }, { unique: true });
InnovationViewSchema.index({ innovation: 1, lastViewedAt: -1 });

export const InnovationView = mongoose.model<IInnovationView>('InnovationView', InnovationViewSchema);
