import request from 'supertest';
import { app } from '../../../app';
import { NotificationService } from '../service/notification.service';

describe('Notification Module Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 401 when fetching notifications without authentication', async () => {
    const res = await request(app).get('/api/v1/notifications');
    expect(res.status).toBe(401);
  });

  it('should return 401 when marking all as read without authentication', async () => {
    const res = await request(app).patch('/api/v1/notifications/read-all');
    expect(res.status).toBe(401);
  });
});
