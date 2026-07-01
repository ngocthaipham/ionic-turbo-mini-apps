import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const sharedDeps = {
  react: { singleton: true, requiredVersion: '^18.3.1' },
  'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
  'react-router-dom': { singleton: true },
  '@ionic/react': { singleton: true },
  '@ionic/react-router': { singleton: true },
};

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        homeRemote: {
          type: 'module',
          name: 'homeRemote',
          entry: 'http://localhost:3001/remoteEntry.js',
          entryGlobalName: 'homeRemote',
          shareScope: 'default',
        },
        productsRemote: {
          type: 'module',
          name: 'productsRemote',
          entry: 'http://localhost:3002/remoteEntry.js',
          entryGlobalName: 'productsRemote',
          shareScope: 'default',
        },
      },
      shared: sharedDeps,
    }),
  ],
  server: {
    port: 3000,
    strictPort: true,
    cors: true,
    origin: 'http://localhost:3000',
  },
  preview: {
    port: 3000,
    strictPort: true,
    cors: true,
  },
  build: {
    target: 'chrome89',
    modulePreload: false,
  },
});
