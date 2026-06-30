import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/music' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string().optional(),
    type: z.enum(['audio', 'video', 'image', 'text']),
    // audio
    audioSrc: z.string().optional(),
    audioHeight: z.string().optional(),
    // video (YouTube/Vimeo embed src)
    videoSrc: z.string().optional(),
    // image
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.string().optional(),
  }),
});

export const collections = { music, blog };
