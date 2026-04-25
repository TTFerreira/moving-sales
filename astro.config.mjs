import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.SITE || 'https://TTFerreira.github.io',
  base: process.env.BASE_PATH || '/moving-sales',
  integrations: [tailwind()],
  legacy: {
    collections: true,
  },
});
