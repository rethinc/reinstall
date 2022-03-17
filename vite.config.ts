import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import colorizableIcons from './vite-plugins/vite-plugin-colorizable-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    colorizableIcons({
      colorizableIconsDirectory:
        'application/shared/icons/assets/svg-colorizable',
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
