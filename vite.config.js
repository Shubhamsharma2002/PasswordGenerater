import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // this line is used to open project in other phone connecting with same wifi
  server:{
    host:true
  }
})
