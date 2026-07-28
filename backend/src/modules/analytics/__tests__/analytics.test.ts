import request from 'supertest';
import { app } from '../../../app';
import { AnalyticsService } from '../service/analytics.service';

describe('Analytics Module Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return platform statistics successfully', async () => {
    const mockStats = {
      totalInnovations: 10,
      totalPublishedInnovations: 8,
      totalViews: 500,
      totalLikes: 100,
      totalBookmarks: 20,
      categoryDistribution: [{ category: 'AI', count: 5 }],
      pricingDistribution: [{ pricingModel: 'FIXED', count: 5 }],
    };

    jest.spyOn(AnalyticsService.prototype, 'getPlatformStats').mockResolvedValueOnce(mockStats);

    const res = await request(app).get('/api/v1/analytics/platform');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.totalInnovations).toBe(10);
    expect(res.body.data.totalViews).toBe(500);
  });

  it('should return 401 when requesting innovation analytics without authentication', async () => {
    const res = await request(app).get('/api/v1/analytics/innovations/507f1f77bcf86cd799439011');
    expect(res.status).toBe(401);
  });
});
