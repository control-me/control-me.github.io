---
title: "Docs: Common Issues - ControlMe"
---

## Common issues
```
'default' is not exported by node_modules/@firebase/app/dist/index.esm2017.js, imported by node_modules/firebase-admin/node_modules/@firebase/database/dist/index.esm.js
```

Add the following configuration entry `vite-ssr.config.ts`:

```
build: {
    rollupOptions: {
      external: ['firebase-admin'],
...
```

## Build faliure

If all else fails, download the latest working build folder from here and copy the files to your local env:

https://console.cloud.google.com/functions/details/us-central1/app?project=controlme-dev&tab=source
