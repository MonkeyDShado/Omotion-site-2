import type { ImageMetadata } from 'astro';
import poster from '../assets/hero/hero-film-poster.jpg';

/**
 * Film « panneau d'entrée » de l'accueil (choix du propriétaire).
 * Mettre heroFilm à null pour revenir au logo et aux formes animées.
 */
export interface HeroFilm {
  /** Titre du film ; absent = placeholder visible */
  title?: string;
  /** Mention honnête du contexte, affichée sous l'extrait */
  credit: string;
  /** Extrait court et muet en boucle, dans public/videos/ */
  loopMp4: string;
  loopWebm?: string;
  width: number;
  height: number;
  /** Image affichée avant la lecture et si les animations sont réduites */
  poster: ImageMetadata;
  /** Identifiant YouTube du film complet (les 11 caractères après « v= ») */
  youtubeId?: string;
}

export const heroFilm: HeroFilm | null = {
  credit: 'Publicité concept, création de démonstration non commandée par la marque',
  loopMp4: '/videos/hero-film.mp4',
  loopWebm: '/videos/hero-film.webm',
  width: 720,
  height: 894,
  poster,
};
