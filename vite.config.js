import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/paularegino/', // <-- nombre de tu repo
  plugins: [react()],
});