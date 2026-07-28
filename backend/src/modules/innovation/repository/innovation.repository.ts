import { Innovation } from '../model/innovation.model';
import { InnovationView } from '../model/innovation-view.model';
import { IInnovation, InnovationStatus } from '../interfaces/innovation.interface';

const OWNER_POPULATE_FIELDS = 'name profileImage role';

class InnovationRepository {
  async create(data: Partial<IInnovation>): Promise<IInnovation> {
    const innovation = new Innovation(data);
    const saved = await innovation.save();
    return saved.populate('owner', OWNER_POPULATE_FIELDS);
  }

  async findById(id: string, includeDeleted = false): Promise<IInnovation | null> {
    const query: Record<string, any> = { _id: id };
    if (!includeDeleted) {
      query.isDeleted = false;
    }
    return Innovation.findOne(query)
      .populate('owner', OWNER_POPULATE_FIELDS)
      .exec();
  }

  async findBySlug(slug: string, includeDeleted = false): Promise<IInnovation | null> {
    const query: Record<string, any> = { slug: slug.toLowerCase() };
    if (!includeDeleted) {
      query.isDeleted = false;
    }
    return Innovation.findOne(query)
      .populate('owner', OWNER_POPULATE_FIELDS)
      .exec();
  }

  async findMany(
    filter: Record<string, any>,
    options: { skip: number; limit: number; sort: Record<string, 1 | -1> }
  ): Promise<{ items: IInnovation[]; total: number }> {
    const [items, total] = await Promise.all([
      Innovation.find(filter)
        .sort(options.sort)
        .skip(options.skip)
        .limit(options.limit)
        .populate('owner', OWNER_POPULATE_FIELDS)
        .exec(),
      Innovation.countDocuments(filter).exec(),
    ]);

    return { items, total };
  }

  async findAll(
    filter: Record<string, any>,
    options: { skip: number; limit: number; sort: Record<string, 1 | -1> }
  ): Promise<{ items: IInnovation[]; total: number }> {
    return this.findMany(filter, options);
  }

  async search(
    queryText: string,
    filter: Record<string, any> = {},
    options: { skip: number; limit: number; sort: Record<string, 1 | -1> } = {
      skip: 0,
      limit: 10,
      sort: { createdAt: -1 },
    }
  ): Promise<{ items: IInnovation[]; total: number }> {
    const searchFilter = {
      ...filter,
      $text: { $search: queryText },
    };
    return this.findMany(searchFilter, options);
  }

  async filter(
    criteria: Record<string, any>,
    options: { skip: number; limit: number; sort: Record<string, 1 | -1> }
  ): Promise<{ items: IInnovation[]; total: number }> {
    return this.findMany(criteria, options);
  }

  async update(id: string, updateData: Partial<IInnovation>): Promise<IInnovation | null> {
    const doc = await Innovation.findById(id).exec();
    if (!doc) return null;

    Object.assign(doc, updateData);
    await doc.save();
    return doc.populate('owner', OWNER_POPULATE_FIELDS);
  }

  async delete(id: string): Promise<IInnovation | null> {
    return Innovation.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    )
      .populate('owner', OWNER_POPULATE_FIELDS)
      .exec();
  }

  async hardDelete(id: string): Promise<IInnovation | null> {
    return Innovation.findByIdAndDelete(id)
      .populate('owner', OWNER_POPULATE_FIELDS)
      .exec();
  }

  async publish(id: string): Promise<IInnovation | null> {
    return Innovation.findByIdAndUpdate(
      id,
      {
        status: InnovationStatus.PUBLISHED,
        publishedAt: new Date(),
      },
      { new: true }
    )
      .populate('owner', OWNER_POPULATE_FIELDS)
      .exec();
  }

  async archive(id: string): Promise<IInnovation | null> {
    return Innovation.findByIdAndUpdate(
      id,
      {
        status: InnovationStatus.ARCHIVED,
      },
      { new: true }
    )
      .populate('owner', OWNER_POPULATE_FIELDS)
      .exec();
  }

  async verify(id: string): Promise<IInnovation | null> {
    return Innovation.findByIdAndUpdate(
      id,
      {
        verified: true,
      },
      { new: true }
    )
      .populate('owner', OWNER_POPULATE_FIELDS)
      .exec();
  }

  async incrementViews(id: string): Promise<void> {
    await Innovation.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { runValidators: false }
    ).exec();
  }

  async toggleLike(
    id: string,
    userId: string
  ): Promise<{ innovation: IInnovation; liked: boolean; likesCount: number } | null> {
    const doc = await Innovation.findById(id).select('+likedBy').exec();
    if (!doc) return null;

    const likedBy = (doc.likedBy || []).map((u: any) => u.toString());
    const isLiked = likedBy.includes(userId);

    const updatedDoc = isLiked
      ? await Innovation.findByIdAndUpdate(
          id,
          {
            $pull: { likedBy: userId },
            $inc: { likes: -1 },
          },
          { new: true }
        )
          .populate('owner', OWNER_POPULATE_FIELDS)
          .exec()
      : await Innovation.findByIdAndUpdate(
          id,
          {
            $addToSet: { likedBy: userId },
            $inc: { likes: 1 },
          },
          { new: true }
        )
          .populate('owner', OWNER_POPULATE_FIELDS)
          .exec();

    if (!updatedDoc) return null;

    const actualLikes = Math.max(0, updatedDoc.likes || 0);
    if (actualLikes !== updatedDoc.likes) {
      updatedDoc.likes = actualLikes;
      await updatedDoc.save();
    }

    return {
      innovation: updatedDoc,
      liked: !isLiked,
      likesCount: updatedDoc.likes,
    };
  }

  async toggleBookmark(
    id: string,
    userId: string
  ): Promise<{ innovation: IInnovation; bookmarked: boolean; bookmarksCount: number } | null> {
    const doc = await Innovation.findById(id).select('+bookmarkedBy').exec();
    if (!doc) return null;

    const bookmarkedBy = (doc.bookmarkedBy || []).map((u: any) => u.toString());
    const isBookmarked = bookmarkedBy.includes(userId);

    const updatedDoc = isBookmarked
      ? await Innovation.findByIdAndUpdate(
          id,
          {
            $pull: { bookmarkedBy: userId },
            $inc: { bookmarks: -1 },
          },
          { new: true }
        )
          .populate('owner', OWNER_POPULATE_FIELDS)
          .exec()
      : await Innovation.findByIdAndUpdate(
          id,
          {
            $addToSet: { bookmarkedBy: userId },
            $inc: { bookmarks: 1 },
          },
          { new: true }
        )
          .populate('owner', OWNER_POPULATE_FIELDS)
          .exec();

    if (!updatedDoc) return null;

    const actualBookmarks = Math.max(0, updatedDoc.bookmarks || 0);
    if (actualBookmarks !== updatedDoc.bookmarks) {
      updatedDoc.bookmarks = actualBookmarks;
      await updatedDoc.save();
    }

    return {
      innovation: updatedDoc,
      bookmarked: !isBookmarked,
      bookmarksCount: updatedDoc.bookmarks,
    };
  }

  async checkLikeStatus(id: string, userId: string): Promise<boolean> {
    const doc = await Innovation.findById(id).select('+likedBy').lean().exec();
    if (!doc) return false;
    const likedBy = ((doc as any).likedBy || []).map((u: any) => u.toString());
    return likedBy.includes(userId);
  }

  async getLikesCount(id: string): Promise<number> {
    const doc = await Innovation.findById(id).select('likes').lean().exec();
    return (doc as any)?.likes || 0;
  }

  async removeLike(id: string, userId: string): Promise<{ innovation: IInnovation; liked: boolean; likesCount: number } | null> {
    const doc = await Innovation.findById(id).select('+likedBy').exec();
    if (!doc) return null;
    const likedBy = (doc.likedBy || []).map((u: any) => u.toString());
    if (!likedBy.includes(userId)) {
      return { innovation: doc, liked: false, likesCount: doc.likes || 0 };
    }
    const updatedDoc = await Innovation.findByIdAndUpdate(
      id,
      { $pull: { likedBy: userId }, $inc: { likes: -1 } },
      { new: true }
    ).populate('owner', OWNER_POPULATE_FIELDS).exec();
    if (!updatedDoc) return null;
    return { innovation: updatedDoc, liked: false, likesCount: Math.max(0, updatedDoc.likes || 0) };
  }

  async trackView(
    innovationId: string,
    ipHash: string,
    viewerId?: string
  ): Promise<{ views: number; uniqueView: boolean }> {
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
    const query: Record<string, any> = {
      innovation: innovationId,
      ...(viewerId ? { viewer: viewerId } : { ipHash }),
    };

    const existingView = await InnovationView.findOne(query).exec();
    let uniqueView = false;

    if (!existingView) {
      uniqueView = true;
      await InnovationView.create({
        innovation: innovationId,
        viewer: viewerId,
        ipHash,
        lastViewedAt: new Date(),
        viewCount: 1,
      });
      await Innovation.findByIdAndUpdate(innovationId, { $inc: { views: 1 } });
    } else if (existingView.lastViewedAt < thirtyMinutesAgo) {
      existingView.lastViewedAt = new Date();
      existingView.viewCount += 1;
      await existingView.save();
      await Innovation.findByIdAndUpdate(innovationId, { $inc: { views: 1 } });
    }

    const doc = await Innovation.findById(innovationId).select('views').lean().exec();
    return { views: (doc as any)?.views || 0, uniqueView };
  }

  async getViewStats(innovationId: string): Promise<{
    totalViews: number;
    uniqueViews: number;
    anonymousViews: number;
    loggedInViews: number;
  }> {
    const doc = await Innovation.findById(innovationId).select('views').lean().exec();
    const totalViews = (doc as any)?.views || 0;
    const uniqueViews = await InnovationView.countDocuments({ innovation: innovationId });
    const loggedInViews = await InnovationView.countDocuments({
      innovation: innovationId,
      viewer: { $exists: true, $ne: null },
    });
    const anonymousViews = Math.max(0, uniqueViews - loggedInViews);

    return {
      totalViews,
      uniqueViews,
      anonymousViews,
      loggedInViews,
    };
  }

  async exists(query: Record<string, any>): Promise<boolean> {
    const res = await Innovation.exists(query);
    return Boolean(res);
  }
}

export const innovationRepository = new InnovationRepository();
