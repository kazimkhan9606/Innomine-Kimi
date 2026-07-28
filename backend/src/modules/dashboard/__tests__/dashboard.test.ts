import request from 'supertest';
import { app } from '../../../app';

describe('Dashboard Module Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 401 when accessing dashboard summary without authentication', async () => {
    const res = await request(app).get('/api/v1/dashboard/summary');
    expect(res.status).toBe(401);
  });
});
