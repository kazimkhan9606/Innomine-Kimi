import { Innovation } from '../../innovation/model/innovation.model';
import { Bookmark } from '../../wishlist/model/bookmark.model';
import { IPlatformStats, IInnovationAnalytics } from '../interfaces/analytics.interface';

export class AnalyticsRepository {
  public async getPlatformStats(): Promise<IPlatformStats> {
    const [
      totalInnovations,
      totalPublishedInnovations,
      totals,
      totalBookmarks,
      categoryDistribution,
      pricingDistribution,
    ] = await Promise.all([
      Innovation.countDocuments({ isDeleted: false }),
      Innovation.countDocuments({ isDeleted: false, status: 'PUBLISHED' }),
      Innovation.aggregate([
        { $match: { isDeleted: false } },
        {
          $group: {
            _id: null,
            totalViews: { $sum: '$views' },
            totalLikes: { $sum: '$likes' },
          },
        },
      ]),
      Bookmark.countDocuments(),
      Innovation.aggregate([
        { $match: { isDeleted: false, status: 'PUBLISHED' } },
        {
          $group: {
            _id: '$category',
            count: { $sum: 1 },
          },
        },
        { $project: { _id: 0, category: '$_id', count: 1 } },
        { $sort: { count: -1 } },
      ]),
      Innovation.aggregate([
        { $match: { isDeleted: false, status: 'PUBLISHED' } },
        {
          $group: {
            _id: '$pricingModel',
            count: { $sum: 1 },
          },
        },
        { $project: { _id: 0, pricingModel: '$_id', count: 1 } },
        { $sort: { count: -1 } },
      ]),
    ]);

    const totalViews = totals.length > 0 ? totals[0].totalViews : 0;
    const totalLikes = totals.length > 0 ? totals[0].totalLikes : 0;

    return {
      totalInnovations,
      totalPublishedInnovations,
      totalViews,
      totalLikes,
      totalBookmarks,
      categoryDistribution,
      pricingDistribution,
    };
  }

  public async getInnovationAnalytics(innovationId: string): Promise<IInnovationAnalytics | null> {
    const innovation = await Innovation.findOne({ _id: innovationId, isDeleted: false })
      .select('views likes')
      .lean()
      .exec();

    if (!innovation) {
      return null;
    }

    const bookmarksCount = await Bookmark.countDocuments({ innovation: innovationId });
    const views = innovation.views || 0;
    const likes = innovation.likes || 0;
    const engagementRate = views > 0 ? Number((((likes + bookmarksCount) / views) * 100).toFixed(2)) : 0;

    return {
      innovationId,
      views,
      likes,
      bookmarks: bookmarksCount,
      engagementRate,
    };
  }
}
