// @ts-nocheck
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ghPages } from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/memory-game/', // base url of the project's site
  plugins: [
    react(),
    ghPages({
      branch: 'docs',
      dest: '/dist',
      user: {
        name: 'Prince Muel',
        email: 'vasnsomecsam@gmail.com',
      },
    }),
  ],
});
