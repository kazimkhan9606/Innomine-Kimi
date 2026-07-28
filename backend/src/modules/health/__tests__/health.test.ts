import request from 'supertest';
import { app } from '../../../app';

describe('Health Module Endpoints', () => {
  it('GET /health should return 200 and server health status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.service).toBe('Innomine Backend');
    expect(res.body.data).toHaveProperty('uptime');
    expect(res.body.data).toHaveProperty('timestamp');
  });

  it('GET /version should return 200 and version info', async () => {
    const res = await request(app).get('/version');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.apiVersion).toBe('v1');
    expect(res.body.data.applicationVersion).toBe('1.0.0');
  });

  it('GET /health/database should return database connection status', async () => {
    const res = await request(app).get('/health/database');
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('status');
    expect(res.body.data).toHaveProperty('database');
  });
});
