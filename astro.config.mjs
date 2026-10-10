// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Adresse publique (Netlify) : sert au sitemap, aux liens canoniques et aux aperçus de partage
  site: 'https://omotion.netlify.app',
  trailingSlash: 'never',
  // Plan du site pour Google ; la page de remerciement du formulaire n'a pas à y figurer
  integrations: [sitemap({ filter: (page) => !page.includes('/merci') })],
});
