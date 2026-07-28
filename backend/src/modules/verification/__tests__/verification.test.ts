import request from 'supertest';
import { app } from '../../../app';

describe('Verification Module Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 401 when fetching own status without authentication', async () => {
    const res = await request(app).get('/api/v1/verification/my-status');
    expect(res.status).toBe(401);
  });

  it('should return 401 when submitting verification without authentication', async () => {
    const res = await request(app).post('/api/v1/verification').send({});
    expect(res.status).toBe(401);
  });
});
