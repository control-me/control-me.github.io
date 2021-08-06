import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import mdPlugin, { Mode } from 'vite-plugin-markdown';
import config from "./tailwind.config.js";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), mdPlugin({
    mode: [Mode.HTML]
  })],
  css: {
    postcss: {
      plugins: [tailwindcss(config), autoprefixer()],
    },
  },
})
