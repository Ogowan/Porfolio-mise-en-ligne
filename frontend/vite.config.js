import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Porfolio-mise-en-ligne/',
  plugins: [react(), tailwindcss()],
  define: {
    global: 'globalThis'
  }
});
