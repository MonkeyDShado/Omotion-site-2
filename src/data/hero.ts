import type { ImageMetadata } from 'astro';
import landscapePoster from '../assets/hero/hero-film-landscape-poster.jpg';
import portraitPoster from '../assets/hero/hero-film-portrait-poster.jpg';

/**
 * Films « panneau d'entrée » de l'accueil, en plein écran.
 * Écran horizontal (ordinateur, tablette couchée) : film 16:9.
 * Écran vertical (téléphone) : film vertical. Ainsi aucun des deux n'est trop recadré.
 */
export interface HeroFilm {
  /** Titre du film ; absent = placeholder visible */
  title?: string;
  /** Mention honnête du contexte */
  credit: string;
  /** Extrait court et muet en boucle, dans public/videos/ */
  mp4: string;
  webm?: string;
  /** Image affichée avant la lecture et si les animations sont réduites */
  poster: ImageMetadata;
  /** Identifiant YouTube du film complet (les 11 caractères après « v= ») */
  youtubeId?: string;
}

export interface HeroFilms {
  landscape: HeroFilm;
  portrait: HeroFilm;
}

/** Mettre à null pour revenir au logo et aux formes animées */
export const heroFilms: HeroFilms | null = {
  landscape: {
    title: 'Amour All', // [À CONFIRMER] lu dans le générique du film
    credit: 'Court métrage, création O’Motion',
    mp4: '/videos/hero-film-landscape.mp4',
    webm: '/videos/hero-film-landscape.webm',
    poster: landscapePoster,
  },
  portrait: {
    credit: 'Publicité concept, création de démonstration non commandée par la marque',
    mp4: '/videos/hero-film-portrait.mp4',
    webm: '/videos/hero-film-portrait.webm',
    poster: portraitPoster,
  },
};
