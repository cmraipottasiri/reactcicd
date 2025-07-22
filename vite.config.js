import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
(property) default: UserConfig
export default defineConfig({
  base:'/gitactionex/',
  plugins: [react()],
})
