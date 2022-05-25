import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

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
  optimizeDeps: {
    include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'],
  },
});
