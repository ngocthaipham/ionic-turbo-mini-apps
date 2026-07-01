import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const sharedDeps = {
  react: { singleton: true, requiredVersion: '^18.3.1' },
  'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
  '@ionic/react': { singleton: true },
};

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'homeRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './HomeApp': './src/HomeApp.tsx',
      },
      shared: sharedDeps,
    }),
  ],
  server: {
    port: 3001,
    strictPort: true,
    cors: true,
    origin: 'http://localhost:3001',
  },
  preview: {
    port: 3001,
    strictPort: true,
    cors: true,
  },
  build: {
    target: 'chrome89',
    modulePreload: false,
  },
});
