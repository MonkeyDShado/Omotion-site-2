/** Familles de vidéos, dans l'ordre d'affichage de la page Projets */
export const videoGroups = [
  { id: 'films', title: 'Films et cinématiques', types: ['film', 'cinematique'] },
  { id: 'scenarios', title: 'Vidéos scénarisées', types: ['scenario'] },
  { id: 'produits', title: 'Vidéos produit', types: ['produit'] },
  { id: 'motion', title: 'Motion design', types: ['motion-design'] },
  { id: 'institutionnel', title: 'Vidéos institutionnelles', types: ['institutionnel'] },
] as const;

export const videoTypeLabels = {
  film: 'Film',
  cinematique: 'Cinématique',
  scenario: 'Vidéo scénarisée',
  produit: 'Vidéo produit',
  'motion-design': 'Motion design',
  institutionnel: 'Vidéo institutionnelle',
} as const;
