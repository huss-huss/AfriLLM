import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias for jQuery so Vite can handle it correctly
      jquery: 'jquery/dist/jquery.min.js',
    },
  },
})
