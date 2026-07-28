import { FeedRepository } from '../repository/feed.repository';
import { IHomepageFeed } from '../interfaces/feed.interface';

export class FeedService {
  private feedRepo: FeedRepository;

  constructor() {
    this.feedRepo = new FeedRepository();
  }

  public async getHomepageFeed(userId?: string): Promise<IHomepageFeed> {
    const [featured, trending, newest, recommendedData] = await Promise.all([
      this.feedRepo.getFeatured(6),
      this.feedRepo.getTrending(8),
      this.feedRepo.getNewest(8),
      this.feedRepo.getRecommended(userId, 6, 1),
    ]);

    return {
      featured,
      trending,
      newest,
      recommended: recommendedData.items,
    };
  }

  public async getRecommendations(userId?: string, page: number = 1, limit: number = 10) {
    const { items, total } = await this.feedRepo.getRecommended(userId, limit, page);
    return {
      items,
      total,
      page,
      limit,
    };
  }
}
