// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://aleixs-trejo.github.io',
  base: '/clon-monteluz/',
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
});