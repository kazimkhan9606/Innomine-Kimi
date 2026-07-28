import crypto from 'crypto';
import { innovationRepository } from '../repository/innovation.repository';
import {
  IInnovation,
  IInnovationQuery,
  InnovationStatus,
  Visibility,
} from '../interfaces/innovation.interface';
import { NotFoundError, AuthorizationError, ConflictError } from '../../../shared/errors';
import { ROLES } from '../../../shared/constants';
import { logger } from '../../../shared/utils/logger';
import {
  getPaginationData,
  createPaginatedResponse,
  PaginatedResult,
} from '../../../shared/utils/pagination';

class InnovationService {
  async createInnovation(
    ownerId: string,
    data: Partial<IInnovation>
  ): Promise<IInnovation> {
    const innovationData: Partial<IInnovation> = {
      ...data,
      owner: ownerId,
    };

    const innovation = await innovationRepository.create(innovationData);
    logger.info(`Innovation created: ${innovation.title} by owner: ${ownerId}`);
    return innovation;
  }

  async getInnovationById(
    id: string,
    currentUserId?: string,
    userRole?: string
  ): Promise<IInnovation> {
    const innovation = await innovationRepository.findById(id);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    this.checkViewPermission(innovation, currentUserId, userRole);

    // Asynchronously increment views without blocking response
    innovationRepository.incrementViews(id).catch((err) => {
      logger.error(`Failed to increment views for Innovation ${id}: ${err.message}`);
    });

    return innovation;
  }

  async getInnovationBySlug(
    slug: string,
    currentUserId?: string,
    userRole?: string
  ): Promise<IInnovation> {
    const innovation = await innovationRepository.findBySlug(slug);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    this.checkViewPermission(innovation, currentUserId, userRole);

    const docId = innovation._id ? innovation._id.toString() : (innovation as any).id;
    if (docId) {
      innovationRepository.incrementViews(docId).catch((err) => {
        logger.error(`Failed to increment views for Innovation ${docId}: ${err.message}`);
      });
    }

    return innovation;
  }

  async listInnovations(
    query: IInnovationQuery,
    currentUserId?: string,
    userRole?: string
  ): Promise<PaginatedResult<IInnovation>> {
    const filter: Record<string, any> = {};

    // Handle soft delete filter
    if (!query.includeDeleted || (userRole !== ROLES.ADMIN && userRole !== ROLES.MODERATOR)) {
      filter.isDeleted = false;
    }

    // Default visibility and status filters for public access
    const isOwnerQueryingSelf = Boolean(
      query.owner && currentUserId && query.owner === currentUserId
    );
    const isPrivileged = userRole === ROLES.ADMIN || userRole === ROLES.MODERATOR;

    if (!isPrivileged && !isOwnerQueryingSelf) {
      filter.status = query.status || InnovationStatus.PUBLISHED;
      filter.visibility = query.visibility || Visibility.PUBLIC;
    } else {
      if (query.status) filter.status = query.status;
      if (query.visibility) filter.visibility = query.visibility;
    }

    const keyword = query.search || query.q;
    if (keyword) {
      filter.$text = { $search: keyword };
    }
    if (query.title) {
      filter.title = { $regex: query.title, $options: 'i' };
    }
    if (query.description) {
      filter.description = { $regex: query.description, $options: 'i' };
    }
    if (query.technology) {
      filter.technologyStack = query.technology;
    }
    if (query.category) {
      filter.category = query.category;
    }
    if (query.subcategory) {
      filter.subcategory = query.subcategory;
    }
    if (query.pricingModel) {
      filter.pricingModel = query.pricingModel;
    }
    if (query.difficulty) {
      filter.difficulty = query.difficulty;
    }
    if (typeof query.featured === 'boolean') {
      filter.featured = query.featured;
    }
    if (typeof query.verified === 'boolean') {
      filter.verified = query.verified;
    }
    if (query.owner) {
      filter.owner = query.owner;
    }
    if (query.tag) {
      filter.tags = query.tag;
    }

    if (query.minPrice !== undefined || query.maxPrice !== undefined) {
      filter.price = {};
      if (query.minPrice !== undefined) filter.price.$gte = query.minPrice;
      if (query.maxPrice !== undefined) filter.price.$lte = query.maxPrice;
    }

    if (query.createdAfter || query.createdBefore) {
      filter.createdAt = {};
      if (query.createdAfter) filter.createdAt.$gte = new Date(query.createdAfter);
      if (query.createdBefore) filter.createdAt.$lte = new Date(query.createdBefore);
    }

    const { page, limit, skip, sort } = getPaginationData(
      {
        page: query.page,
        limit: query.limit,
        sortBy: query.sortBy,
        sortOrder: query.sortOrder,
      },
      10
    );

    const { items, total } = await innovationRepository.findAll(filter, {
      skip,
      limit,
      sort,
    });

    return createPaginatedResponse(items, total, page, limit);
  }

  async updateInnovation(
    id: string,
    currentUserId: string,
    userRole: string,
    updateData: Partial<IInnovation>
  ): Promise<IInnovation> {
    const innovation = await innovationRepository.findById(id);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    if (!this.canModify(innovation, currentUserId, userRole)) {
      throw new AuthorizationError('You do not have permission to update this innovation');
    }

    const updated = await innovationRepository.update(id, updateData);
    if (!updated) {
      throw new NotFoundError('Innovation not found during update');
    }

    logger.info(`Innovation updated: ${id} by user: ${currentUserId}`);
    return updated;
  }

  async deleteInnovation(
    id: string,
    currentUserId: string,
    userRole: string
  ): Promise<IInnovation> {
    const innovation = await innovationRepository.findById(id);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    if (!this.canModify(innovation, currentUserId, userRole)) {
      throw new AuthorizationError('You do not have permission to delete this innovation');
    }

    const deleted = await innovationRepository.delete(id);
    if (!deleted) {
      throw new NotFoundError('Innovation not found during delete');
    }

    logger.info(`Innovation deleted (soft): ${id} by user: ${currentUserId}`);
    return deleted;
  }

  async publishInnovation(
    id: string,
    currentUserId: string,
    userRole: string
  ): Promise<IInnovation> {
    const innovation = await innovationRepository.findById(id, true);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    if (innovation.isDeleted) {
      throw new ConflictError('Cannot publish a deleted innovation');
    }

    if (!this.canModify(innovation, currentUserId, userRole)) {
      throw new AuthorizationError('You do not have permission to publish this innovation');
    }

    const published = await innovationRepository.publish(id);
    if (!published) {
      throw new NotFoundError('Innovation not found during publish');
    }

    logger.info(`Innovation published: ${id} by user: ${currentUserId}`);
    return published;
  }

  async archiveInnovation(
    id: string,
    currentUserId: string,
    userRole: string
  ): Promise<IInnovation> {
    const innovation = await innovationRepository.findById(id);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    if (innovation.status === InnovationStatus.ARCHIVED) {
      throw new ConflictError('Cannot archive an already archived innovation');
    }

    if (!this.canModify(innovation, currentUserId, userRole)) {
      throw new AuthorizationError('You do not have permission to archive this innovation');
    }

    const archived = await innovationRepository.archive(id);
    if (!archived) {
      throw new NotFoundError('Innovation not found during archive');
    }

    logger.info(`Innovation archived: ${id} by user: ${currentUserId}`);
    return archived;
  }

  async verifyInnovation(
    id: string,
    currentUserId: string,
    userRole: string
  ): Promise<IInnovation> {
    if (userRole !== ROLES.ADMIN && userRole !== ROLES.MODERATOR) {
      throw new AuthorizationError('Only administrators or moderators can verify innovations');
    }

    const innovation = await innovationRepository.findById(id);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    const verified = await innovationRepository.verify(id);
    if (!verified) {
      throw new NotFoundError('Innovation not found during verify');
    }

    logger.info(`Innovation verified: ${id} by moderator/admin: ${currentUserId}`);
    return verified;
  }

  async toggleLike(
    id: string,
    currentUserId: string
  ): Promise<{ innovation: IInnovation; liked: boolean; likesCount: number }> {
    const innovation = await innovationRepository.findById(id);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    const result = await innovationRepository.toggleLike(id, currentUserId);
    if (!result) {
      throw new NotFoundError('Innovation not found during like toggle');
    }

    logger.info(`Innovation like toggled: ${id} by user: ${currentUserId}`);
    return result;
  }

  async unlike(
    id: string,
    currentUserId: string
  ): Promise<{ innovation: IInnovation; liked: boolean; likesCount: number }> {
    const innovation = await innovationRepository.findById(id);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }
    const result = await innovationRepository.removeLike(id, currentUserId);
    if (!result) {
      throw new NotFoundError('Innovation not found during unlike');
    }
    logger.info(`Innovation unliked: ${id} by user: ${currentUserId}`);
    return result;
  }

  async checkLikeStatus(id: string, currentUserId: string): Promise<{ isLiked: boolean }> {
    const isLiked = await innovationRepository.checkLikeStatus(id, currentUserId);
    return { isLiked };
  }

  async getLikesCount(id: string): Promise<{ count: number }> {
    const count = await innovationRepository.getLikesCount(id);
    return { count };
  }

  async trackView(
    id: string,
    ipAddress: string,
    viewerId?: string
  ): Promise<{ views: number; uniqueView: boolean }> {
    const innovation = await innovationRepository.findById(id);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }
    const ipHash = crypto.createHash('sha256').update(ipAddress || '0.0.0.0').digest('hex');
    const result = await innovationRepository.trackView(id, ipHash, viewerId);
    return result;
  }

  async getViewStats(id: string) {
    const innovation = await innovationRepository.findById(id);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }
    const stats = await innovationRepository.getViewStats(id);
    return stats;
  }

  async toggleBookmark(
    id: string,
    currentUserId: string
  ): Promise<{ innovation: IInnovation; bookmarked: boolean; bookmarksCount: number }> {
    const innovation = await innovationRepository.findById(id);
    if (!innovation) {
      throw new NotFoundError('Innovation not found');
    }

    const result = await innovationRepository.toggleBookmark(id, currentUserId);
    if (!result) {
      throw new NotFoundError('Innovation not found during bookmark toggle');
    }

    logger.info(`Innovation bookmark toggled: ${id} by user: ${currentUserId}`);
    return result;
  }

  private checkViewPermission(
    innovation: IInnovation,
    currentUserId?: string,
    userRole?: string
  ): void {
    if (innovation.isDeleted && userRole !== ROLES.ADMIN && userRole !== ROLES.MODERATOR) {
      throw new NotFoundError('Innovation not found');
    }

    const isOwner = currentUserId && this.getOwnerId(innovation.owner) === currentUserId;
    const isPrivileged = userRole === ROLES.ADMIN || userRole === ROLES.MODERATOR;

    if (
      (innovation.status !== InnovationStatus.PUBLISHED ||
        innovation.visibility === Visibility.PRIVATE) &&
      !isOwner &&
      !isPrivileged
    ) {
      throw new AuthorizationError('You do not have permission to view this innovation');
    }
  }

  private getOwnerId(owner: any): string {
    if (!owner) return '';
    if (typeof owner === 'string') return owner;
    if (owner._id) return owner._id.toString();
    if (owner.id) return owner.id.toString();
    return owner.toString();
  }

  private canModify(
    doc: IInnovation,
    currentUserId: string,
    userRole: string
  ): boolean {
    if (userRole === ROLES.ADMIN) return true;
    return this.getOwnerId(doc.owner) === currentUserId;
  }
}

export const innovationService = new InnovationService();
