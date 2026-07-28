import { Notification } from '../model/notification.model';
import { INotification, ICreateNotificationDTO } from '../interfaces/notification.interface';

export class NotificationRepository {
  public async create(payload: ICreateNotificationDTO): Promise<INotification> {
    return Notification.create({
      recipient: payload.recipientId,
      sender: payload.senderId || null,
      type: payload.type,
      title: payload.title,
      message: payload.message,
      link: payload.link,
    });
  }

  public async getByRecipient(
    recipientId: string,
    page: number = 1,
    limit: number = 20
  ): Promise<{ items: any[]; total: number; unreadCount: number }> {
    const filter = { recipient: recipientId };
    const skip = (page - 1) * limit;

    const [total, unreadCount, items] = await Promise.all([
      Notification.countDocuments(filter),
      Notification.countDocuments({ recipient: recipientId, isRead: false }),
      Notification.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate('sender', 'name profileImage role')
        .lean()
        .exec(),
    ]);

    return { items, total, unreadCount };
  }

  public async markAsRead(id: string, recipientId: string): Promise<INotification | null> {
    return Notification.findOneAndUpdate(
      { _id: id, recipient: recipientId },
      { isRead: true },
      { new: true }
    ).exec();
  }

  public async markAllAsRead(recipientId: string): Promise<number> {
    const res = await Notification.updateMany(
      { recipient: recipientId, isRead: false },
      { $set: { isRead: true } }
    ).exec();
    return res.modifiedCount;
  }
}
