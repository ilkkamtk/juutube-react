import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3011, // Set the desired port here
  },
  preview: {
    port: 3011, // Set the desired port here
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
