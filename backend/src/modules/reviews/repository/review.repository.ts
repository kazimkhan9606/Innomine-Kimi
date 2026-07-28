import { Types } from 'mongoose';
import { Review } from '../model/review.model';
import { IReview } from '../interfaces/review.interface';

export class ReviewRepository {
  public async create(payload: {
    innovation: string;
    reviewer: string;
    rating: number;
    title?: string;
    content: string;
  }): Promise<IReview> {
    const review = await Review.create(payload);
    return review.populate('reviewer', 'name profileImage role');
  }

  public async findByInnovationAndReviewer(
    innovationId: string,
    reviewerId: string
  ): Promise<IReview | null> {
    return Review.findOne({ innovation: innovationId, reviewer: reviewerId }).exec();
  }

  public async getByInnovation(
    innovationId: string,
    page: number = 1,
    limit: number = 10
  ): Promise<{ items: any[]; total: number; averageRating: number; distribution: any[] }> {
    const filter = { innovation: innovationId };
    const skip = (page - 1) * limit;

    const [total, items, statsAgg] = await Promise.all([
      Review.countDocuments(filter),
      Review.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate('reviewer', 'name profileImage role')
        .lean()
        .exec(),
      Review.aggregate([
        { $match: { innovation: new Types.ObjectId(innovationId) } },
        {
          $group: {
            _id: null,
            averageRating: { $avg: '$rating' },
            totalReviews: { $sum: 1 },
          },
        },
      ]),
    ]);

    const averageRating =
      statsAgg.length > 0 && statsAgg[0].averageRating ? Number(statsAgg[0].averageRating.toFixed(2)) : 0;

    const distributionAgg = await Review.aggregate([
      { $match: { innovation: new Types.ObjectId(innovationId) } },
      {
        $group: {
          _id: '$rating',
          count: { $sum: 1 },
        },
      },
      { $project: { _id: 0, rating: '$_id', count: 1 } },
      { $sort: { rating: -1 } },
    ]);

    return {
      items,
      total,
      averageRating,
      distribution: distributionAgg,
    };
  }
}
