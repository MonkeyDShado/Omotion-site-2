import type { ImageMetadata } from 'astro';

/**
 * Film « panneau d'entrée » de l'accueil (choix du propriétaire).
 * Tant qu'il vaut null, l'accueil affiche le logo et les formes animées.
 */
export interface HeroFilm {
  title: string;
  /** Extrait court et muet en boucle, dans public/videos/ */
  loopMp4: string;
  loopWebm?: string;
  /** Image affichée avant la lecture et si les animations sont réduites */
  poster: ImageMetadata;
  /** Identifiant YouTube du film complet (les 11 caractères après « v= ») */
  youtubeId?: string;
}

export const heroFilm: HeroFilm | null = null;
