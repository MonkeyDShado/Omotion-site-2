import type { CollectionEntry } from 'astro:content';
import { themeIds } from './themes';

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

/** Portfolio rangé par thème (ordre de themes.ts), puis du plus récent au plus ancien */
export const byThemeThenDate = (a: Project, b: Project) =>
  themeIds.indexOf(a.data.theme) - themeIds.indexOf(b.data.theme) || byDateDesc(a, b);
