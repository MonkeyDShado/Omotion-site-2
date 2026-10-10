import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { themeIds } from './data/themes';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        // client : commande réelle ; auto-promotion : pour O’Motion ; concept : création de démonstration
        context: z.enum(['client', 'auto-promotion', 'concept']),
        client: z.string().optional(), // nom du client, seulement si context = client
        // Démo qui met en scène une marque existante : affiche « non commandé par la marque »
        realBrand: z.boolean().default(false),
        // Position dans le portfolio (1 = en premier)
        order: z.number().int().default(99),
        date: z.coerce.date(),
        category: z.enum(['key-visual', 'video']),
        theme: z.enum(themeIds).optional(),
        videoType: z.enum(['film', 'cinematique', 'scenario', 'produit', 'motion-design', 'institutionnel']).optional(),
        featured: z.boolean().default(false),
        cover: image(),
        coverAlt: z.string().min(1),
        // Tous les visuels de la campagne, dans leur format d'origine
        gallery: z.array(z.object({ src: image(), alt: z.string().min(1) })).default([]),
        videoPreview: z.string().startsWith('/videos/').optional(),
        youtubeId: z.string().regex(/^[\w-]{11}$/).optional(), // vidéo complète hébergée sur YouTube
        tools: z.array(z.string()).default([]),
        // Obligatoire : ce qu'a fait l'IA, ce qui relève du travail humain
        aiRole: z.string().min(1),
      })
      .refine((p) => p.category !== 'video' || (Boolean(p.videoType) && Boolean(p.videoPreview)), {
        message: 'Une vidéo a besoin de videoType et de videoPreview',
        path: ['videoPreview'],
      })
      .refine((p) => p.context !== 'client' || Boolean(p.client), {
        message: 'Le nom du client est obligatoire pour un projet client',
        path: ['client'],
      }),
});

export const collections = { projects };
