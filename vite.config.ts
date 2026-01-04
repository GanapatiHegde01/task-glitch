import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/task-glitch/' : '/', 
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
}));

