// @ts-check
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // base: '', // if domain is not root, set base path
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    vue({
      devtools: true,
    }),
  ],
});
