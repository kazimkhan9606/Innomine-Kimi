import { Schema, model } from 'mongoose';
import { IComment } from '../interfaces/comment.interface';

const commentSchema = new Schema<IComment>(
  {
    innovation: {
      type: Schema.Types.ObjectId,
      ref: 'Innovation',
      required: true,
      index: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      default: null,
      index: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = model<IComment>('Comment', commentSchema);
