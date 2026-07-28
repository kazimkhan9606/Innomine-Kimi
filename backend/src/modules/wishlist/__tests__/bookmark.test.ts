import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../../../app';

describe('Bookmark Module Endpoints', () => {
  it('should return 401 when toggling bookmark without authentication', async () => {
    const res = await request(app)
      .post('/api/v1/bookmarks')
      .send({ innovationId: new mongoose.Types.ObjectId().toString() });

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it('should return 401 when listing bookmarks without authentication', async () => {
    const res = await request(app).get('/api/v1/bookmarks');
    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it('should return 401 when checking bookmark status without authentication', async () => {
    const res = await request(app).get(`/api/v1/bookmarks/status/${new mongoose.Types.ObjectId().toString()}`);
    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });
});
