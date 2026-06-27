import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = '/hackathonssi/' para servir sob o caminho do GitHub Pages
// (https://<usuario>.github.io/hackathonssi/). Trocar por '/' se for usar domínio próprio.
export default defineConfig({
  base: '/hackathonssi/',
  plugins: [react()],
})
