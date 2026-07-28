import { Document, Types } from 'mongoose';

export type NotificationType = 'LIKE' | 'BOOKMARK' | 'COMMENT' | 'REVIEW' | 'SYSTEM';

export interface INotification extends Document {
  recipient: Types.ObjectId;
  sender?: Types.ObjectId;
  type: NotificationType;
  title: string;
  message: string;
  link?: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateNotificationDTO {
  recipientId: string;
  senderId?: string;
  type: NotificationType;
  title: string;
  message: string;
  link?: string;
}
