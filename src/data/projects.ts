import type { CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'projects'>;

/** Mention honnête du contexte d'un projet */
export function contextLabel({ data }: Project): string {
  if (data.context === 'client') return `Client : ${data.client}`;
  if (data.context === 'auto-promotion') return 'Auto-promotion O’Motion';
  return data.realBrand ? 'Création de démonstration, non commandée par la marque' : 'Création de démonstration';
}

export function countLabel({ data }: Project): string {
  const n = Math.max(data.gallery.length, 1);
  if (data.category === 'video') return 'Vidéo';
  return n > 1 ? `${n} visuels` : '1 visuel';
}

export const byDateDesc = (a: Project, b: Project) => b.data.date.valueOf() - a.data.date.valueOf();

/** Ordre choisi pour le portfolio (champ order), puis du plus récent au plus ancien */
export const byOrder = (a: Project, b: Project) => a.data.order - b.data.order || byDateDesc(a, b);
