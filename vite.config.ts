import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, './src')},
      { find: "@animations", replacement: path.resolve(__dirname, './src/animations')},
      { find: "@assets", replacement: path.resolve(__dirname, './src/assets')},
      { find: "@components", replacement: path.resolve(__dirname, './src/components')},
      { find: "@contexts", replacement: path.resolve(__dirname, './src/contexts')},
      { find: "@pages", replacement: path.resolve(__dirname, './src/pages')},
      { find: "@icons", replacement: path.resolve(__dirname, './icons')},
      { find: "@images", replacement: path.resolve(__dirname, '/images')}
    ]
  }
})
