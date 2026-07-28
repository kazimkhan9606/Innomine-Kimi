import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BookmarkService } from '../service/bookmark.service';
import { successResponse } from '../../../shared/utils/response';
import { createPaginatedResponse } from '../../../shared/utils/pagination';

export class BookmarkController {
  private bookmarkService: BookmarkService;

  constructor() {
    this.bookmarkService = new BookmarkService();
  }

  public toggleBookmark = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = (req as any).user.id || (req as any).user._id;
      const { innovationId } = req.body;
      const result = await this.bookmarkService.toggleBookmark(userId, innovationId);
      res.status(StatusCodes.OK).json(successResponse(result, 'Bookmark toggled successfully'));
    } catch (error) {
      next(error);
    }
  };

  public addBookmark = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = (req as any).user.id || (req as any).user._id;
      const innovationId = req.params.innovationId as string;
      const result = await this.bookmarkService.addBookmark(userId, innovationId);
      res.status(StatusCodes.CREATED).json(successResponse(result, 'Bookmark added successfully'));
    } catch (error) {
      next(error);
    }
  };

  public removeBookmark = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = (req as any).user.id || (req as any).user._id;
      const innovationId = req.params.innovationId as string;
      const result = await this.bookmarkService.removeBookmark(userId, innovationId);
      res.status(StatusCodes.OK).json(successResponse(result, 'Bookmark removed successfully'));
    } catch (error) {
      next(error);
    }
  };

  public getUserBookmarks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = (req as any).user.id || (req as any).user._id;
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const sortBy = (req.query.sortBy as string) || 'createdAt';
      const sortOrder = ((req.query.sortOrder as string) || 'desc') as 'asc' | 'desc';

      const result = await this.bookmarkService.getUserBookmarks(userId, page, limit, sortBy, sortOrder);
      const paginatedPayload = createPaginatedResponse(result.items, result.total, page, limit);
      res.status(StatusCodes.OK).json(successResponse(paginatedPayload, 'Bookmarks retrieved successfully'));
    } catch (error) {
      next(error);
    }
  };

  public checkBookmarkStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = (req as any).user.id || (req as any).user._id;
      const innovationId = req.params.innovationId as string;
      const result = await this.bookmarkService.checkBookmarkStatus(userId, innovationId);
      res.status(StatusCodes.OK).json(successResponse(result, 'Bookmark status checked successfully'));
    } catch (error) {
      next(error);
    }
  };
}
