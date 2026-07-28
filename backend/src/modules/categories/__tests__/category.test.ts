import request from 'supertest';
import { app } from '../../../app';
import { CategoryService } from '../service/category.service';

describe('Category Module Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should retrieve all categories with counts successfully', async () => {
    const mockCategories = [
      { name: 'AI & Robotics', slug: 'ai-robotics', innovationCount: 5 },
    ];

    jest.spyOn(CategoryService.prototype, 'getAllCategories').mockResolvedValueOnce(mockCategories);

    const res = await request(app).get('/api/v1/categories');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveLength(1);
    expect(res.body.data[0].slug).toBe('ai-robotics');
  });

  it('should return 401 when creating a category without authentication', async () => {
    const res = await request(app)
      .post('/api/v1/categories')
      .send({ name: 'Biotech', slug: 'biotech' });

    expect(res.status).toBe(401);
  });
});
