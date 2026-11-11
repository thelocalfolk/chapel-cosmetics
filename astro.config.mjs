import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chapelcosmetics.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
