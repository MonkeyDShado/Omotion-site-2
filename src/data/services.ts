export interface Formula {
  title: string;
  description: string;
}

export interface Service {
  id: 'key-visual' | 'video';
  title: string;
  /** Résumé court, repris sur l'accueil */
  summary: string;
  /** Paragraphes détaillés de la page Services */
  details: string[];
  formulas?: Formula[];
}

export const services: Service[] = [
  {
    id: 'key-visual',
    title: 'Key visuals',
    summary:
      'Un visuel fort et polyvalent pour lancer un produit ou annoncer un événement, sans le coût d’une campagne complète.',
    details: [
      'Après votre prise de contact, je vous pose une série de questions ciblées : le ton à donner, les supports sur lesquels le visuel sera diffusé.',
      'Je crée ensuite un visuel unique, pensé dès le départ pour fonctionner partout : affiche, réseaux sociaux, site web.',
    ],
  },
  {
    id: 'video',
    title: 'Montage vidéo',
    summary: 'Deux formules selon votre projet : une vidéo scénarisée au rendu studio, ou une vidéo institutionnelle claire et efficace.',
    details: ['Deux formules, selon votre projet et votre budget.'],
    formulas: [
      {
        title: 'Vidéo scénarisée',
        description:
          'Une vraie mise en scène, entièrement générée par l’IA. Par exemple, une vidéo produit qui fait ressentir la gourmandise d’une barre de chocolat, ou un court scénario au rendu cinéma. Vous obtenez des images dignes d’un studio, sans payer de tournage.',
      },
      {
        title: 'Vidéo institutionnelle',
        description:
          'Un montage simple et efficace pour présenter votre entreprise ou votre offre : vidéos libres de droits, textes, images et animations.',
      },
    ],
  },
];
