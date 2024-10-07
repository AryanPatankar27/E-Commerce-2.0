import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    esbuildOptions: {
      mainFields: ['module', 'main'],
      resolveExtensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom',
    },
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
})