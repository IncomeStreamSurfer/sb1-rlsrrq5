import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://theclassicmenswearchronicle.com',
  integrations: [tailwind(), sitemap()],
});
