// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
