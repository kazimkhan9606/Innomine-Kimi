import request from 'supertest';
import { app } from '../../../app';
import { authService } from '../service/auth.service';

describe('Auth Module Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/v1/auth/register', () => {
    it('should return 400 for invalid registration input (validation error)', async () => {
      const res = await request(app)
        .post('/api/v1/auth/register')
        .send({
          name: '',
          email: 'not-an-email',
          password: '123',
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.errors.length).toBeGreaterThan(0);
    });

    it('should return 201 when registration succeeds', async () => {
      jest.spyOn(authService, 'register').mockResolvedValueOnce({
        user: {
          id: '507f1f77bcf86cd799439011',
          name: 'Test Innovator',
          email: 'innovator@innomine.com',
          role: 'INNOVATOR',
        } as any,
        tokens: {
          accessToken: 'mock.access.token',
          refreshToken: 'mock.refresh.token',
        },
      });

      const res = await request(app)
        .post('/api/v1/auth/register')
        .send({
          name: 'Test Innovator',
          email: 'innovator@innomine.com',
          password: 'StrongPassword123!',
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.user.email).toBe('innovator@innomine.com');
      expect(res.body.data.tokens.accessToken).toBe('mock.access.token');
    });
  });

  describe('POST /api/v1/auth/login', () => {
    it('should return 400 when login email is missing', async () => {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({
          password: 'StrongPassword123!',
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('should return 200 when login succeeds', async () => {
      jest.spyOn(authService, 'login').mockResolvedValueOnce({
        user: {
          id: '507f1f77bcf86cd799439011',
          name: 'Test Innovator',
          email: 'innovator@innomine.com',
          role: 'INNOVATOR',
        } as any,
        tokens: {
          accessToken: 'mock.access.token',
          refreshToken: 'mock.refresh.token',
        },
      });

      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'innovator@innomine.com',
          password: 'StrongPassword123!',
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.tokens.accessToken).toBe('mock.access.token');
    });
  });
});
