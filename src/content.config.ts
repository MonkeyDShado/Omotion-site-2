import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // client : commande réelle ; auto-promotion : pour O’Motion ; concept : création de démonstration
      context: z.enum(['client', 'auto-promotion', 'concept']),
      client: z.string().optional(), // nom du client, seulement si context = client
      date: z.coerce.date(),
      category: z.enum(['key-visual', 'video']),
      videoType: z.enum(['produit', 'motion-design', 'scenario', 'film', 'institutionnel']).optional(),
      campaign: z.string().optional(), // nom de la campagne, pour regrouper des key visuals
      featured: z.boolean().default(false),
      cover: image(),
      coverAlt: z.string().min(1),
      videoPreview: z.string().startsWith('/videos/').optional(),
      videoUrl: z.url().optional(),
      formats: z.array(z.string()).default([]),
      tools: z.array(z.string()).default([]),
      // Obligatoire : ce qu'a fait l'IA, ce qui relève du travail humain
      aiRole: z.string().min(1),
    })
      .refine((p) => p.context !== 'client' || Boolean(p.client), {
        message: 'Le nom du client est obligatoire pour un projet client',
        path: ['client'],
      }),
});

export const collections = { projects };
