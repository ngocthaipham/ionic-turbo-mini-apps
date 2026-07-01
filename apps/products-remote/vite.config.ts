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
      name: 'productsRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsApp': './src/ProductsApp.tsx',
      },
      shared: sharedDeps,
    }),
  ],
  server: {
    port: 3002,
    strictPort: true,
    cors: true,
    origin: 'http://localhost:3002',
  },
  preview: {
    port: 3002,
    strictPort: true,
    cors: true,
  },
  build: {
    target: 'chrome89',
    modulePreload: false,
  },
});
