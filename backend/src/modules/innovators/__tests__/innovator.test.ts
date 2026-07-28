import request from 'supertest';
import { app } from '../../../app';
import { InnovatorService } from '../service/innovator.service';

describe('Innovator Profile Module Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return innovator profile successfully', async () => {
    const mockProfile = {
      _id: '507f1f77bcf86cd799439011',
      name: 'Dr. Sarah Vance',
      role: 'INNOVATOR',
      stats: { totalInnovations: 3, totalViews: 120, totalLikes: 45 },
      innovations: [],
    };

    jest.spyOn(InnovatorService.prototype, 'getProfile').mockResolvedValueOnce(mockProfile);

    const res = await request(app).get('/api/v1/innovators/507f1f77bcf86cd799439011/profile');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.name).toBe('Dr. Sarah Vance');
  });

  it('should return 401 when updating profile without authentication', async () => {
    const res = await request(app)
      .patch('/api/v1/innovators/profile')
      .send({ bio: 'Updated bio text' });

    expect(res.status).toBe(401);
  });
});
