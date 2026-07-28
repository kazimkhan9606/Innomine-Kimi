import { BookmarkRepository } from '../repository/bookmark.repository';
import { Innovation } from '../../innovation/model/innovation.model';
import { NotFoundError, ConflictError } from '../../../shared/errors';

export class BookmarkService {
  private bookmarkRepo: BookmarkRepository;

  constructor() {
    this.bookmarkRepo = new BookmarkRepository();
  }

  public async toggleBookmark(userId: string, innovationId: string): Promise<{ bookmarked: boolean }> {
    const innovation = await Innovation.findOne({ _id: innovationId, isDeleted: false });
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    const existing = await this.bookmarkRepo.findByUserAndInnovation(userId, innovationId);
    if (existing) {
      await this.bookmarkRepo.delete(userId, innovationId);
      await Innovation.findByIdAndUpdate(innovationId, { $inc: { bookmarks: -1 } });
      return { bookmarked: false };
    } else {
      await this.bookmarkRepo.create(userId, innovationId);
      await Innovation.findByIdAndUpdate(innovationId, { $inc: { bookmarks: 1 } });
      return { bookmarked: true };
    }
  }

  public async addBookmark(userId: string, innovationId: string): Promise<{ bookmarked: true }> {
    const innovation = await Innovation.findOne({ _id: innovationId, isDeleted: false });
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    const existing = await this.bookmarkRepo.findByUserAndInnovation(userId, innovationId);
    if (existing) {
      throw new ConflictError('Innovation is already bookmarked');
    }

    await this.bookmarkRepo.create(userId, innovationId);
    await Innovation.findByIdAndUpdate(innovationId, { $inc: { bookmarks: 1 } });
    return { bookmarked: true };
  }

  public async removeBookmark(userId: string, innovationId: string): Promise<{ bookmarked: false }> {
    const innovation = await Innovation.findOne({ _id: innovationId, isDeleted: false });
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    const existing = await this.bookmarkRepo.findByUserAndInnovation(userId, innovationId);
    if (!existing) {
      throw new NotFoundError('Bookmark not found');
    }

    await this.bookmarkRepo.delete(userId, innovationId);
    await Innovation.findByIdAndUpdate(innovationId, { $inc: { bookmarks: -1 } });
    return { bookmarked: false };
  }

  public async getUserBookmarks(
    userId: string,
    page = 1,
    limit = 10,
    sortBy = 'createdAt',
    sortOrder: 'asc' | 'desc' = 'desc'
  ) {
    const { items, total } = await this.bookmarkRepo.findUserBookmarks(
      userId,
      page,
      limit,
      sortBy,
      sortOrder
    );

    return {
      items,
      total,
      page,
      limit,
    };
  }

  public async checkBookmarkStatus(userId: string, innovationId: string): Promise<{ isBookmarked: boolean }> {
    const existing = await this.bookmarkRepo.findByUserAndInnovation(userId, innovationId);
    return { isBookmarked: !!existing };
  }
}
