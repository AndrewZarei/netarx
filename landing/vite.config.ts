import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/landing/' : '/',
  publicDir: 'asset',
  server: {
    proxy: {
      '/products': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/product': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
}))
