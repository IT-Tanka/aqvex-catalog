import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
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
})
