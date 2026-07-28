import { ReviewRepository } from '../repository/review.repository';
import { ICreateReviewDTO } from '../interfaces/review.interface';
import { ConflictError } from '../../../shared/errors';

export class ReviewService {
  private reviewRepo: ReviewRepository;

  constructor() {
    this.reviewRepo = new ReviewRepository();
  }

  public async createReview(reviewerId: string, dto: ICreateReviewDTO) {
    const existing = await this.reviewRepo.findByInnovationAndReviewer(
      dto.innovationId,
      reviewerId
    );

    if (existing) {
      throw new ConflictError('You have already submitted a review for this innovation');
    }

    return this.reviewRepo.create({
      innovation: dto.innovationId,
      reviewer: reviewerId,
      rating: dto.rating,
      title: dto.title,
      content: dto.content,
    });
  }

  public async getInnovationReviews(innovationId: string, page: number = 1, limit: number = 10) {
    const data = await this.reviewRepo.getByInnovation(innovationId, page, limit);
    return {
      averageRating: data.averageRating,
      totalReviews: data.total,
      distribution: data.distribution,
      items: data.items,
      total: data.total,
      page,
      limit,
    };
  }
}
