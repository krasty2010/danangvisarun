import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  base: './',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  ssgOptions: {
    entry: 'src/main-ssg-simple.tsx',
    routes: [
      '/',
      '/en',
    ],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        en: resolve(__dirname, 'index-en.html'), // путь к index-en.html в корне
      },
    },
  },
});
