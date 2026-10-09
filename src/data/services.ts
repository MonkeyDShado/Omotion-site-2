export interface Service {
  id: 'key-visual' | 'video';
  title: string;
  summary: string;
  uses: string[];
}

export const services: Service[] = [
  {
    id: 'key-visual',
    title: 'Key visuals',
    summary:
      'Le visuel qui porte votre message. Une image forte, déclinée dans tous les formats dont vous avez besoin.',
    uses: [
      'Campagnes et lancements de produit',
      'Événements et affiches',
      'Pochettes',
      'Publications pour les réseaux sociaux',
    ],
  },
  {
    id: 'video',
    title: 'Montage vidéo',
    summary:
      'Des vidéos courtes qui retiennent l’attention, en vertical pour les réseaux comme en horizontal pour votre site.',
    uses: [
      'Clips et teasers',
      'Contenus pour les réseaux sociaux',
      'Motion design léger : titres, logos, éléments animés',
    ],
  },
];
