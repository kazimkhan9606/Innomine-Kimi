import { z } from 'zod';

export const createCategorySchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').max(50),
    slug: z
      .string()
      .min(1, 'Slug is required')
      .max(50)
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be URL friendly'),
    description: z.string().max(500).optional(),
    icon: z.string().optional(),
    parentCategoryId: z.string().optional(),
  }),
});
