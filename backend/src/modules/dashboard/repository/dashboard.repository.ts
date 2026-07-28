import { Innovation } from '../../innovation/model/innovation.model';
import { Bookmark } from '../../wishlist/model/bookmark.model';
import { IDashboardSummary } from '../interfaces/dashboard.interface';

export class DashboardRepository {
  public async getSummary(innovatorId: string): Promise<IDashboardSummary> {
    const filter = { owner: innovatorId, isDeleted: false };

    const [
      totalInnovations,
      totalPublished,
      totalDrafts,
      totals,
      recentInnovations,
      topPerforming,
    ] = await Promise.all([
      Innovation.countDocuments(filter),
      Innovation.countDocuments({ ...filter, status: 'PUBLISHED' }),
      Innovation.countDocuments({ ...filter, status: 'DRAFT' }),
      Innovation.aggregate([
        { $match: { owner: innovatorId, isDeleted: false } },
        {
          $group: {
            _id: null,
            totalViews: { $sum: '$views' },
            totalLikes: { $sum: '$likes' },
          },
        },
      ]),
      Innovation.find(filter)
        .sort({ createdAt: -1 })
        .limit(5)
        .select('title slug status category views likes price createdAt')
        .lean()
        .exec(),
      Innovation.find(filter)
        .sort({ views: -1, likes: -1 })
        .limit(5)
        .select('title slug status category views likes price createdAt')
        .lean()
        .exec(),
    ]);

    const innovatorInnovationIds = recentInnovations.map((i) => i._id);
    const totalBookmarks =
      innovatorInnovationIds.length > 0
        ? await Bookmark.countDocuments({ innovation: { $in: innovatorInnovationIds } })
        : 0;

    const totalViews = totals.length > 0 ? totals[0].totalViews : 0;
    const totalLikes = totals.length > 0 ? totals[0].totalLikes : 0;

    return {
      innovatorId,
      totalInnovations,
      totalPublished,
      totalDrafts,
      totalViews,
      totalLikes,
      totalBookmarks,
      recentInnovations,
      topPerforming,
    };
  }
}
