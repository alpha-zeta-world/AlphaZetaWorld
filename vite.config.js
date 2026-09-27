import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const apiOrigin = new URL(env.VITE_API_URL || 'http://localhost:5001/api').origin

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: apiOrigin,
          changeOrigin: true,
          secure: true,
        },
      },
    },
  }
})
