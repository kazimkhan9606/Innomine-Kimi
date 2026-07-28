import { z } from 'zod';

export const createReviewSchema = z.object({
  body: z.object({
    innovationId: z.string().min(1, 'innovationId is required'),
    rating: z.number().int().min(1).max(5),
    title: z.string().max(100).optional(),
    content: z.string().min(1, 'content is required').max(2000),
  }),
});
