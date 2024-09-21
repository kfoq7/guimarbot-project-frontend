import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@page': path.resolve(__dirname, './src/page'),
      '@services': path.resolve(__dirname, './src/services'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
})
