import mongoose, { Schema } from 'mongoose';
import { IBookmark } from '../interfaces/bookmark.interface';

const BookmarkSchema = new Schema<IBookmark>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    innovation: {
      type: Schema.Types.ObjectId,
      ref: 'Innovation',
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (_doc, ret: Record<string, any>) {
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
    },
  }
);

// Prevent duplicate bookmarks per user for the same innovation
BookmarkSchema.index({ user: 1, innovation: 1 }, { unique: true });
BookmarkSchema.index({ user: 1, createdAt: -1 });

export const Bookmark = mongoose.model<IBookmark>('Bookmark', BookmarkSchema);
