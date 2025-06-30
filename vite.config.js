import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dialUsCreations/', // 👈 required
  plugins: [react()],
})
