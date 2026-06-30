import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/music' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string().optional(),
    embedSrc: z.string(),
    embedHeight: z.string().default('120px'),
  }),
});

export const collections = { music };
