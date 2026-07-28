import request from 'supertest';
import { app } from '../../../app';
import { SearchService } from '../service/search.service';

describe('Search and Advanced Filters Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return filter metadata successfully', async () => {
    const mockMetadata = {
      categories: ['AI', 'Robotics'],
      pricingModels: ['FIXED', 'SUBSCRIPTION'],
      priceRange: { min: 100, max: 10000 },
    };

    jest.spyOn(SearchService.prototype, 'getFilterMetadata').mockResolvedValueOnce(mockMetadata as any);

    const res = await request(app).get('/api/v1/search/metadata');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.categories).toEqual(['AI', 'Robotics']);
  });

  it('should search innovations with query and filters successfully', async () => {
    const mockSearchResult = {
      items: [
        {
          _id: '507f1f77bcf86cd799439011',
          title: 'AI Drug Discovery Platform',
          slug: 'ai-drug-discovery',
          category: 'AI',
          price: 5000,
        },
      ],
      total: 1,
      page: 1,
      limit: 12,
    };

    jest.spyOn(SearchService.prototype, 'searchInnovations').mockResolvedValueOnce(mockSearchResult);

    const res = await request(app).get('/api/v1/search?q=Drug&category=AI&minPrice=1000');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.items).toHaveLength(1);
    expect(res.body.data.total).toBe(1);
  });
});
