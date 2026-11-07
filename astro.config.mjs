// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live address. If you rename the repository to something other than
// <username>.github.io, also add:  base: '/<repository-name>'
export default defineConfig({
  site: 'https://vallecertobey17-coder.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
