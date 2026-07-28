import request from 'supertest';
import { app } from '../../../app';
import { CommentService } from '../service/comment.service';

describe('Comments Module Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get innovation comments successfully', async () => {
    const mockComments = {
      items: [{ _id: '1', content: 'Great innovation!' }],
      total: 1,
      page: 1,
      limit: 20,
    };

    jest.spyOn(CommentService.prototype, 'getInnovationComments').mockResolvedValueOnce(mockComments);

    const res = await request(app).get('/api/v1/comments/innovation/507f1f77bcf86cd799439011');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.items).toHaveLength(1);
  });

  it('should return 401 when posting a comment without authentication', async () => {
    const res = await request(app)
      .post('/api/v1/comments')
      .send({ innovationId: '507f1f77bcf86cd799439011', content: 'Hello!' });

    expect(res.status).toBe(401);
  });
});
