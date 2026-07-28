import request from 'supertest';
import { app } from '../../../app';
import { ReviewService } from '../service/review.service';

describe('Reviews Module Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get innovation reviews with average rating successfully', async () => {
    const mockReviews = {
      averageRating: 4.5,
      totalReviews: 2,
      distribution: [{ rating: 5, count: 1 }, { rating: 4, count: 1 }],
      items: [{ _id: '1', rating: 5, content: 'Excellent!' }],
      total: 2,
      page: 1,
      limit: 10,
    };

    jest.spyOn(ReviewService.prototype, 'getInnovationReviews').mockResolvedValueOnce(mockReviews);

    const res = await request(app).get('/api/v1/reviews/innovation/507f1f77bcf86cd799439011');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.averageRating).toBe(4.5);
  });

  it('should return 401 when posting a review without authentication', async () => {
    const res = await request(app)
      .post('/api/v1/reviews')
      .send({ innovationId: '507f1f77bcf86cd799439011', rating: 5, content: 'Awesome!' });

    expect(res.status).toBe(401);
  });
});
