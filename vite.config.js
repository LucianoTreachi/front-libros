import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  resolve: {
    alias: {
      // Alias para la carpeta components
      "@components": fileURLToPath(new URL('./src/components', import.meta.url)),
      // Alias para la carpeta routes
      "@routes": fileURLToPath(new URL('./src/routes', import.meta.url)),
      // Alias para la carpeta context
      "@context": fileURLToPath(new URL('./src/context', import.meta.url)),
    },
  },
  plugins: [react()],
});
