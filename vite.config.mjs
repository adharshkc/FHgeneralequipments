import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
base: "./",
  plugins: [react()],
  server: {
    port: 3000, // runs on localhost:3000
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
  define: {
  global: {},
},

}));
