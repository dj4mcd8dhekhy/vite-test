import { defineConfig } from 'vite';

export default defineConfig({
  base: "/vite-test/",
  server: {
    host: "localhost",
    port: 5000,
    strictPort: true
  }
});