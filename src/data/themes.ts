/** Thèmes du portfolio, dans l'ordre d'affichage */
export const themes = {
  restauration: 'Restauration',
  boissons: 'Boissons',
  beaute: 'Beauté et cosmétique',
  mode: 'Mode',
  finance: 'Finance et services',
  communication: 'Communication',
} as const;

export type Theme = keyof typeof themes;
export const themeIds = Object.keys(themes) as [Theme, ...Theme[]];
