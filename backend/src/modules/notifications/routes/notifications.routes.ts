import { Router } from 'express';
import { NotificationController } from '../controller/notification.controller';
import { authenticate } from '../../../shared/middlewares/authenticate';

const router = Router();
const notificationController = new NotificationController();

// GET /api/v1/notifications - Get current user notifications with unread count
router.get('/', authenticate, notificationController.getMyNotifications);

// PATCH /api/v1/notifications/read-all - Mark all notifications as read
router.patch('/read-all', authenticate, notificationController.markAllAsRead);

// PATCH /api/v1/notifications/:id/read - Mark a single notification as read
router.patch('/:id/read', authenticate, notificationController.markAsRead);

export const notificationsRoutes = router;
