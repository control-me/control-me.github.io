#!/usr/bin/env sh

# https://vitejs.dev/guide/static-deploy.html#github-pages

# abort on errors
set -e

# install deps
npm ci

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# next github action: Commit and force Push to master branch