import { defineCollection, z } from 'astro:content';

const tutorials = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  tutorials, notes
};