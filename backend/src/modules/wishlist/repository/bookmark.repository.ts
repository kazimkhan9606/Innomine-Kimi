import { Bookmark } from '../model/bookmark.model';
import { IBookmark } from '../interfaces/bookmark.interface';

export class BookmarkRepository {
  public async create(userId: string, innovationId: string): Promise<IBookmark> {
    const bookmark = new Bookmark({ user: userId, innovation: innovationId });
    return await bookmark.save();
  }

  public async delete(userId: string, innovationId: string): Promise<boolean> {
    const result = await Bookmark.deleteOne({ user: userId, innovation: innovationId });
    return result.deletedCount > 0;
  }

  public async findByUserAndInnovation(userId: string, innovationId: string): Promise<IBookmark | null> {
    return Bookmark.findOne({ user: userId, innovation: innovationId }).exec();
  }

  public async findUserBookmarks(
    userId: string,
    page = 1,
    limit = 10,
    sortBy = 'createdAt',
    sortOrder: 'asc' | 'desc' = 'desc'
  ): Promise<{ items: any[]; total: number }> {
    const skip = (page - 1) * limit;
    const sort: Record<string, 1 | -1> = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };

    const total = await Bookmark.countDocuments({ user: userId });
    const items = await Bookmark.find({ user: userId })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate({
        path: 'innovation',
        select: 'title slug shortDescription coverImage category pricingModel price owner likes bookmarks views isDeleted status visibility',
        populate: {
          path: 'owner',
          select: 'name profileImage role',
        },
      })
      .lean()
      .exec();

    // Filter out bookmarked innovations that were hard-deleted or soft-deleted
    const validItems = items.filter(
      (item: any) => item.innovation && !item.innovation.isDeleted
    );

    return { items: validItems, total };
  }

  public async countByInnovation(innovationId: string): Promise<number> {
    return Bookmark.countDocuments({ innovation: innovationId });
  }
}
