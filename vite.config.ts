import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [react(), commonjs()],
  server: {
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: 'build', // Output directory for the build files
  },
});
