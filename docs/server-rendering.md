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