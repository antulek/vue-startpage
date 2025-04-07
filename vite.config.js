import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import hmr from './src/vite-hmr.js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), hmr()],
  base: "/vue-startpage/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
