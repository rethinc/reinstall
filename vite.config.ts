import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { pluginIconColorizable } from './vite-plugins/pluginIconColorizable'
import colorizableIcons from './vite-plugins/vite-plugin-colorizable-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginIconColorizable(),
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
