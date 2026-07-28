import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { NotificationService } from '../service/notification.service';
import { successResponse } from '../../../shared/utils/response';
import { createPaginatedResponse } from '../../../shared/utils/pagination';
import { AuthRequest } from '../../../shared/interfaces/auth-request.interface';

export class NotificationController {
  private notificationService: NotificationService;

  constructor() {
    this.notificationService = new NotificationService();
  }

  public getMyNotifications = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.user!.id;
      const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 20;

      const result = await this.notificationService.getUserNotifications(userId, page, limit);
      const paginatedPayload = createPaginatedResponse(
        result.items,
        result.total,
        result.page,
        result.limit
      );

      res.status(StatusCodes.OK).json(
        successResponse(
          {
            ...paginatedPayload,
            unreadCount: result.unreadCount,
          },
          'Notifications retrieved successfully'
        )
      );
    } catch (error) {
      next(error);
    }
  };

  public markAsRead = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const { id } = req.params;
      const notif = await this.notificationService.markNotificationAsRead(id as string, userId);
      res
        .status(StatusCodes.OK)
        .json(successResponse(notif, 'Notification marked as read'));
    } catch (error) {
      next(error);
    }
  };

  public markAllAsRead = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.user!.id;
      const result = await this.notificationService.markAllNotificationsAsRead(userId);
      res
        .status(StatusCodes.OK)
        .json(successResponse(result, 'All notifications marked as read'));
    } catch (error) {
      next(error);
    }
  };
}
