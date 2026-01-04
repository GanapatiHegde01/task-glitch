import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
    plugins: [react()],
    base: '/task-glitch/', 
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
