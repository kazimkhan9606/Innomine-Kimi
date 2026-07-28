import request from 'supertest';
import { app } from '../../../app';
import { FeedService } from '../service/feed.service';

describe('Homepage Feed and Recommendation Engine Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return homepage feed successfully', async () => {
    const mockFeed = {
      featured: [{ _id: '1', title: 'Featured Innovation' }],
      trending: [{ _id: '2', title: 'Trending Innovation' }],
      newest: [{ _id: '3', title: 'Newest Innovation' }],
      recommended: [{ _id: '4', title: 'Recommended Innovation' }],
    };

    jest.spyOn(FeedService.prototype, 'getHomepageFeed').mockResolvedValueOnce(mockFeed);

    const res = await request(app).get('/api/v1/feed/home');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.featured).toHaveLength(1);
    expect(res.body.data.trending).toHaveLength(1);
    expect(res.body.data.newest).toHaveLength(1);
    expect(res.body.data.recommended).toHaveLength(1);
  });

  it('should return recommendations with pagination successfully', async () => {
    const mockRecs = {
      items: [{ _id: '1', title: 'Rec 1' }],
      total: 1,
      page: 1,
      limit: 10,
    };

    jest.spyOn(FeedService.prototype, 'getRecommendations').mockResolvedValueOnce(mockRecs);

    const res = await request(app).get('/api/v1/feed/recommendations?page=1&limit=10');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.items).toHaveLength(1);
    expect(res.body.data.total).toBe(1);
  });
});
