import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const _dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      extensions: ['.svelte', '.svx'],
      preprocess: mdsvex({
        layout: { product: './src/lib/pages/ProductPage.svelte' },
      }),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(_dirname, 'index.html'),
        producto: resolve(_dirname, 'producto/index.html'),
        'producto-2d': resolve(_dirname, 'producto-2d/index.html'),
      },
    },
  },
  optimizeDeps: {
    include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'],
  },
});
