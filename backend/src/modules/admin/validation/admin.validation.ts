import { z } from 'zod';

export const updateUserStatusSchema = z.object({
  body: z.object({
    isActive: z.boolean(),
  }),
});

export const updateInnovationStatusSchema = z.object({
  body: z.object({
    status: z.enum(['DRAFT', 'PENDING_REVIEW', 'PUBLISHED', 'ARCHIVED', 'FLAGGED']).optional(),
    visibility: z.enum(['PUBLIC', 'PRIVATE', 'UNLISTED']).optional(),
  }),
});
