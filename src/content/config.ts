import { defineCollection, z } from 'astro:content';

const items = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['furniture', 'electronics', 'kitchen', 'outdoor', 'clothing', 'books', 'toys', 'sports', 'tools', 'decor', 'misc']),
    condition: z.enum(['new', 'like-new', 'good', 'fair', 'poor']),
    askingPrice: z.number(),
    originalPrice: z.number().optional(),
    specs: z.record(z.string()).optional(),
    images: z.array(z.string()).default([]),
    youtubeVideoId: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    status: z.enum(['available', 'reserved', 'sold']).default('available'),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    dateAdded: z.string().default(() => new Date().toISOString().split('T')[0]),
  }),
});

export const collections = { items };
