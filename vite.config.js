import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    chunkSplitPlugin({
      // Configura aquí según tus necesidades
      maxSize: 500, // Tamaño máximo en kilobytes
    }),
  ],
  server: {
    port: 4545, // Cambia este número al puerto deseado
  },
  optimizeDeps: {
    force: true, // Esta opción asegura que Vite use el puerto especificado sin intentar encontrar uno disponible.
  },
  build: {
    outDir: "build",
  },
});
