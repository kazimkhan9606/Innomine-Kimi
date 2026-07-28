import { Comment } from '../model/comment.model';
import { IComment } from '../interfaces/comment.interface';

export class CommentRepository {
  public async create(payload: {
    innovation: string;
    author: string;
    content: string;
    parentComment?: string;
  }): Promise<IComment> {
    const comment = await Comment.create(payload);
    return comment.populate('author', 'name profileImage role');
  }

  public async getByInnovation(
    innovationId: string,
    page: number = 1,
    limit: number = 20
  ): Promise<{ items: any[]; total: number }> {
    const filter = {
      innovation: innovationId,
      isDeleted: false,
    };

    const skip = (page - 1) * limit;

    const [total, items] = await Promise.all([
      Comment.countDocuments(filter),
      Comment.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate('author', 'name profileImage role')
        .lean()
        .exec(),
    ]);

    return { items, total };
  }

  public async findById(id: string): Promise<IComment | null> {
    return Comment.findOne({ _id: id, isDeleted: false }).exec();
  }

  public async softDelete(id: string): Promise<IComment | null> {
    return Comment.findOneAndUpdate({ _id: id }, { isDeleted: true }, { new: true }).exec();
  }
}
