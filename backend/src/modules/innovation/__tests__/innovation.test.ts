import request from 'supertest';
import { app } from '../../../app';
import { innovationService } from '../service/innovation.service';

describe('Innovation Module Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/v1/innovations', () => {
    it('should return 200 and a paginated list of innovations', async () => {
      const mockInnovationsResult = {
        items: [
          {
            _id: '507f1f77bcf86cd799439011',
            title: 'Quantum Sensor G1',
            slug: 'quantum-sensor-g1',
            category: 'Robotics',
            status: 'PUBLISHED',
          },
        ],
        total: 1,
        totalItems: 1,
        page: 1,
        currentPage: 1,
        limit: 10,
        skip: 0,
        totalPages: 1,
        hasNext: false,
        hasPrevious: false,
      } as any;

      jest
        .spyOn(innovationService, 'listInnovations')
        .mockResolvedValueOnce(mockInnovationsResult);

      const res = await request(app).get('/api/v1/innovations');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.items).toHaveLength(1);
      expect(res.body.data.total).toBe(1);
      expect(res.body.data.page).toBe(1);
    });

    it('should return 400 for innovation ID format error', async () => {
      const res = await request(app).get('/api/v1/innovations/invalid-id-format');
      expect(res.status).toBe(400); // Mongoose ObjectId regex/zod validation returns 400
      expect(res.body.success).toBe(false);
    });

    it('should return 401 when toggling like without authentication', async () => {
      const res = await request(app).post('/api/v1/innovations/507f1f77bcf86cd799439011/like');
      expect(res.status).toBe(401);
    });

    it('should allow counting likes publicly', async () => {
      jest.spyOn(innovationService, 'getLikesCount').mockResolvedValueOnce({ count: 15 });
      const res = await request(app).get('/api/v1/innovations/507f1f77bcf86cd799439011/likes/count');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.count).toBe(15);
    });

    it('should allow tracking views publicly or anonymously', async () => {
      jest.spyOn(innovationService, 'trackView').mockResolvedValueOnce({ views: 42, uniqueView: true });
      const res = await request(app).post('/api/v1/innovations/507f1f77bcf86cd799439011/view');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.views).toBe(42);
    });
  });
});
