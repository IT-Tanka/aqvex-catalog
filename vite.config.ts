import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/_variables.scss" as *;
          
        `,
        // api: 'modern-compiler',   // якщо використовуєш новіший Sass (Dart Sass 1.78+)
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',   // якщо ще немає — додай, щоб @ працював як src/
    },
  },
  server: {
    proxy: {
      '/api/proxy': {
        target: 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/proxy/, '/api/v1'),
        secure: false, // если SSL-ошибки — можно true/false поэкспериментировать
      },
    },
  },
})
