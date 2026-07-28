import { z } from 'zod';

const stringOrArray = z.union([z.string(), z.array(z.string())]).optional();

export const searchQuerySchema = z.object({
  query: z.object({
    q: z.string().trim().max(100).optional(),
    category: stringOrArray,
    tags: stringOrArray,
    technologyStack: stringOrArray,
    pricingModel: stringOrArray,
    minPrice: z.coerce.number().min(0).optional(),
    maxPrice: z.coerce.number().min(0).optional(),
    readinessLevel: z.coerce.number().int().min(1).max(9).optional(),
    minLikes: z.coerce.number().int().min(0).optional(),
    minViews: z.coerce.number().int().min(0).optional(),
    owner: z.string().optional(),
    sortBy: z
      .enum(['relevance', 'createdAt', 'likes', 'views', 'price', 'trending'])
      .default('relevance'),
    sortOrder: z.enum(['asc', 'desc']).default('desc'),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(100).default(12),
  }),
});
