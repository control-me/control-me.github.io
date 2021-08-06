import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import mdPlugin, { Mode } from 'vite-plugin-markdown';
import config from "./tailwind.config.js";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import * as MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

const markdownIt: MarkdownIt.Options = {
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  langPrefix: 'language-',
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return hljs.highlightAuto(str).value;
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), mdPlugin({
    mode: [Mode.HTML, Mode.TOC],
    markdownIt
  })],
  css: {
    postcss: {
      plugins: [tailwindcss(config), autoprefixer()],
    },
  },
})
