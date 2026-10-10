/** Coordonnées et réseaux fournis par le propriétaire (liens nettoyés des paramètres de suivi) */
export const whatsapp = {
  number: '+212 778 749 311',
  href: `https://wa.me/212778749311?text=${encodeURIComponent('Bonjour, je souhaite un devis pour un projet.')}`,
};

export const socials = [
  { id: 'instagram', label: 'Instagram', handle: '@omotion_off', href: 'https://www.instagram.com/omotion_off/' },
  { id: 'facebook', label: 'Facebook', handle: 'O’Motion', href: 'https://www.facebook.com/share/1GVCK1sXuL/' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'Christopher Doumaine Mayombot',
    href: 'https://www.linkedin.com/in/christopher-doumaine-mayombot-207663238',
  },
] as const;

export type SocialId = (typeof socials)[number]['id'] | 'whatsapp';
