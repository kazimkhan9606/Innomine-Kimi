import { NotificationRepository } from '../repository/notification.repository';
import { ICreateNotificationDTO } from '../interfaces/notification.interface';
import { NotFoundError } from '../../../shared/errors';

export class NotificationService {
  private notificationRepo: NotificationRepository;

  constructor() {
    this.notificationRepo = new NotificationRepository();
  }

  public async createNotification(dto: ICreateNotificationDTO) {
    return this.notificationRepo.create(dto);
  }

  public async getUserNotifications(userId: string, page: number = 1, limit: number = 20) {
    const { items, total, unreadCount } = await this.notificationRepo.getByRecipient(
      userId,
      page,
      limit
    );
    return {
      items,
      total,
      unreadCount,
      page,
      limit,
    };
  }

  public async markNotificationAsRead(notificationId: string, userId: string) {
    const notif = await this.notificationRepo.markAsRead(notificationId, userId);
    if (!notif) {
      throw new NotFoundError('Notification not found');
    }
    return notif;
  }

  public async markAllNotificationsAsRead(userId: string) {
    const count = await this.notificationRepo.markAllAsRead(userId);
    return { modifiedCount: count };
  }
}
