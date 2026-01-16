import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: Set base to repo name for GitHub Pages
// If you rename the repo, update this to `/<new-repo-name>/`
const basePath = '/Daycare-Management-Webpage/';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: basePath,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // SECURITY: Do NOT expose API keys to client-side code
        // Use a backend proxy instead for sensitive API calls
        'process.env.VITE_APP_ENV': JSON.stringify(env.VITE_APP_ENV || 'development')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
