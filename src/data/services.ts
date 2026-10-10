import type { IconName } from '../components/Icon.astro';

/** Déroulement et délai d'une offre, tels que fixés par le propriétaire */
export interface Process {
  delay: string;
  steps?: string[];
  notes?: string[];
}

export interface Formula {
  title: string;
  icon: IconName;
  description: string;
  process: Process;
}

export interface Service {
  id: 'key-visual' | 'video';
  title: string;
  icon: IconName;
  /** Résumé court, repris sur l'accueil */
  summary: string;
  /** Paragraphes détaillés de la page Services */
  details: string[];
  process?: Process;
  formulas?: Formula[];
}

export const services: Service[] = [
  {
    id: 'key-visual',
    title: 'Key visuals',
    icon: 'key-visual',
    summary:
      'Un visuel fort et polyvalent pour lancer un produit ou annoncer un événement, sans le coût d’une campagne complète. Livré en 48 h.',
    details: [
      'Je crée un visuel unique, pensé dès le départ pour fonctionner partout où vous le diffusez : affiche, réseaux sociaux, site web.',
    ],
    process: {
      delay: '48 h, à partir de vos réponses',
      steps: [
        'Vous répondez à une série de questions ciblées : le ton à donner, les supports de diffusion.',
        'Je crée votre key visual en 24 h.',
        'Vous avez 24 h pour me demander des retouches, jusqu’à 3.',
        'Je vous livre le visuel final.',
      ],
    },
  },
  {
    id: 'video',
    title: 'Montage vidéo',
    icon: 'video-scenarisee',
    summary:
      'Deux formules selon votre projet : une vidéo scénarisée au rendu studio en 4 jours, ou une vidéo institutionnelle en 5 jours.',
    details: ['Deux formules, selon votre projet et votre budget.'],
    formulas: [
      {
        title: 'Vidéo scénarisée',
        icon: 'video-scenarisee',
        description:
          'Une vraie mise en scène, entièrement générée par l’IA. Par exemple, une vidéo produit qui fait ressentir la gourmandise d’une barre de chocolat, ou un court scénario au rendu cinéma. Vous obtenez des images dignes d’un studio, sans payer de tournage.',
        process: {
          delay: '4 jours, à partir de la validation du storyboard',
          steps: [
            'Vous validez le scénario.',
            'Vous validez le storyboard.',
            'Je crée la vidéo pendant 3 jours. Vous me signalez vos retouches le 3e jour.',
            'J’applique les retouches et je vous livre la vidéo le 4e jour.',
          ],
          notes: ['Pour tenir ce délai, je réalise une seule vidéo à la fois par client.'],
        },
      },
      {
        title: 'Vidéo institutionnelle',
        icon: 'video-institutionnelle',
        description:
          'Un montage soigné pour présenter votre entreprise ou votre offre : vidéos libres de droits, textes, images et animations.',
        process: {
          delay: '5 jours',
          notes: [
            'Ce délai comprend la recherche des vidéos et des images qui accompagnent votre message.',
            'Plusieurs séries de retouches sont prévues, jusqu’à ce que le résultat vous convienne.',
          ],
        },
      },
    ],
  },
];
