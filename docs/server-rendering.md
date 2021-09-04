---
title: "Docs: Server rendering - ControlMe"
tags:
  - "docs"
  - "server"
  - "rendering"
---

## Commands

```bash
# start vite dev server
npm run dev

# build SPA
npm run build
# build SSR
npm run build:ssr
# prerender page to static HTML
npm run prerenfer

# deploy to firebase hosting
npm run deploy:hosting
```

## Learn more

View Vite Plugin SSR docs at:  
https://vite-plugin-ssr.com/

## Applications

Server side rendering means that the meta tags can be added based on dynamic data from our database, and the page HTML is rendered by a Firebase Function. This makes it search engine friendly, so if for example if a company wants to promote their campaign link on social media platforms, they can do so and the link preview will work nicely.

Link preview may be checked on the [Google Search Console](https://search.google.com/search-console) and https://metatags.io/ to see if the link preview is working.

## Common issues

```
web-app/node_modules/vite-plugin-ssr/dist/cjs/cli/bin.node.js:27
  throw rejectValue;
  ^

Error: Cannot find module 'react'
Require stack:
- web-app/node_modules/@headlessui/react/dist/headlessui.cjs.production.min.js
- web-app/node_modules/@headlessui/react/dist/index.js
...
```
Solution: replace all `require("react")` and `require("react-dom")` calls in the `@headlessui` package in `node_modules` folder with `require("preact/compat")`. This will be important for CI script implementation.