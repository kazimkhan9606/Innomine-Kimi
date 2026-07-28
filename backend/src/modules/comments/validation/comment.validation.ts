import { z } from 'zod';

export const createCommentSchema = z.object({
  body: z.object({
    innovationId: z.string().min(1, 'innovationId is required'),
    content: z.string().min(1, 'content is required').max(1000),
    parentCommentId: z.string().optional(),
  }),
});
