import request from 'supertest';
import { app } from '../../../app';

describe('Admin Module Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 401 when accessing admin users without authentication', async () => {
    const res = await request(app).get('/api/v1/admin/users');
    expect(res.status).toBe(401);
  });

  it('should return 401 when accessing admin innovations without authentication', async () => {
    const res = await request(app).get('/api/v1/admin/innovations');
    expect(res.status).toBe(401);
  });
});
