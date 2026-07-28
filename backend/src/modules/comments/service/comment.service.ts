import { CommentRepository } from '../repository/comment.repository';
import { ICreateCommentDTO } from '../interfaces/comment.interface';
import { NotFoundError, AuthorizationError } from '../../../shared/errors';

export class CommentService {
  private commentRepo: CommentRepository;

  constructor() {
    this.commentRepo = new CommentRepository();
  }

  public async createComment(authorId: string, dto: ICreateCommentDTO) {
    return this.commentRepo.create({
      author: authorId,
      innovation: dto.innovationId,
      content: dto.content,
      parentComment: dto.parentCommentId,
    });
  }

  public async getInnovationComments(innovationId: string, page: number = 1, limit: number = 20) {
    const { items, total } = await this.commentRepo.getByInnovation(innovationId, page, limit);
    return {
      items,
      total,
      page,
      limit,
    };
  }

  public async deleteComment(commentId: string, userId: string, userRole: string) {
    const comment = await this.commentRepo.findById(commentId);
    if (!comment) {
      throw new NotFoundError('Comment not found');
    }

    if (comment.author.toString() !== userId && userRole !== 'ADMIN') {
      throw new AuthorizationError('You are not authorized to delete this comment');
    }

    return this.commentRepo.softDelete(commentId);
  }
}
