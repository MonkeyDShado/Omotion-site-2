import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(), // ou "Projet personnel"
      date: z.coerce.date(),
      category: z.enum(['key-visual', 'video']),
      featured: z.boolean().default(false),
      cover: image(),
      coverAlt: z.string().min(1),
      videoPreview: z.string().startsWith('/videos/').optional(),
      videoUrl: z.url().optional(),
      formats: z.array(z.string()).default([]),
      tools: z.array(z.string()).default([]),
      // Obligatoire : ce qu'a fait l'IA, ce qui relève du travail humain
      aiRole: z.string().min(1),
    }),
});

export const collections = { projects };
