import { Innovation } from '../../innovation/model/innovation.model';
import { Bookmark } from '../../wishlist/model/bookmark.model';

export class FeedRepository {
  private baseFilter = {
    isDeleted: false,
    status: 'PUBLISHED',
    visibility: 'PUBLIC',
  };

  public async getFeatured(limit: number = 6): Promise<any[]> {
    return Innovation.find(this.baseFilter)
      .sort({ likes: -1, views: -1, createdAt: -1 })
      .limit(limit)
      .populate('owner', 'name profileImage role')
      .lean()
      .exec();
  }

  public async getTrending(limit: number = 8): Promise<any[]> {
    return Innovation.find(this.baseFilter)
      .sort({ views: -1, likes: -1 })
      .limit(limit)
      .populate('owner', 'name profileImage role')
      .lean()
      .exec();
  }

  public async getNewest(limit: number = 8): Promise<any[]> {
    return Innovation.find(this.baseFilter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate('owner', 'name profileImage role')
      .lean()
      .exec();
  }

  public async getRecommended(
    userId?: string,
    limit: number = 10,
    page: number = 1
  ): Promise<{ items: any[]; total: number }> {
    const skip = (page - 1) * limit;

    if (!userId) {
      const [total, items] = await Promise.all([
        Innovation.countDocuments(this.baseFilter),
        Innovation.find(this.baseFilter)
          .sort({ likes: -1, views: -1 })
          .skip(skip)
          .limit(limit)
          .populate('owner', 'name profileImage role')
          .lean()
          .exec(),
      ]);
      return { items, total };
    }

    // Authenticated user recommendations based on bookmarks and likes
    const bookmarks = await Bookmark.find({ user: userId }).select('innovation').lean().exec();
    const bookmarkedIds = bookmarks.map((b) => b.innovation);

    const userInteracted = await Innovation.find({
      $or: [{ _id: { $in: bookmarkedIds } }, { likedBy: userId }],
    })
      .select('category tags')
      .lean()
      .exec();

    const categories = Array.from(new Set(userInteracted.map((i) => i.category).filter(Boolean)));
    const tags = Array.from(new Set(userInteracted.flatMap((i) => i.tags || []).filter(Boolean)));

    const recommendFilter: Record<string, any> = {
      ...this.baseFilter,
      owner: { $ne: userId },
    };

    if (categories.length > 0 || tags.length > 0) {
      recommendFilter.$or = [];
      if (categories.length > 0) recommendFilter.$or.push({ category: { $in: categories } });
      if (tags.length > 0) recommendFilter.$or.push({ tags: { $in: tags } });
    }

    const [total, items] = await Promise.all([
      Innovation.countDocuments(recommendFilter),
      Innovation.find(recommendFilter)
        .sort({ likes: -1, views: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate('owner', 'name profileImage role')
        .lean()
        .exec(),
    ]);

    return { items, total };
  }
}
