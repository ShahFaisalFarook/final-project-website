import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dialUs-Live/',  // 👈 Make sure it's the correct repo name
  plugins: [react()],
})
