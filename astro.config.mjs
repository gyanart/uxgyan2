import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gyanart.github.io',
  base: '/uxgyan2',
  trailingSlash: 'never',
  build: { format: 'file' },
});
