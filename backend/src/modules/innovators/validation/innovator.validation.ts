import { z } from 'zod';

export const updateInnovatorProfileSchema = z.object({
  body: z.object({
    bio: z.string().max(500).optional(),
    companyName: z.string().max(100).optional(),
    website: z.string().url().optional(),
    expertise: z.array(z.string()).max(10).optional(),
    socialLinks: z
      .object({
        twitter: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        github: z.string().url().optional(),
      })
      .optional(),
  }),
});
