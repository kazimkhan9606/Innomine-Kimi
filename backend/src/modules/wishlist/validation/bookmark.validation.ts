import { z } from 'zod';

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export const createBookmarkSchema = z.object({
  body: z.object({
    innovationId: z
      .string()
      .regex(objectIdRegex, 'Invalid innovation ID format'),
  }),
});

export const deleteBookmarkSchema = z.object({
  params: z.object({
    innovationId: z
      .string()
      .regex(objectIdRegex, 'Invalid innovation ID format'),
  }),
});

export const queryBookmarkSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(100).default(10),
    sortBy: z
      .enum(['createdAt', 'updatedAt'])
      .default('createdAt'),
    sortOrder: z.enum(['asc', 'desc']).default('desc'),
  }),
});
