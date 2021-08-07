#!/usr/bin/env sh

# https://vitejs.dev/guide/static-deploy.html#github-pages

# abort on errors
set -e

# install deps
npm ci

# build
npm run build

# copy docs to dist
cp -r docs dist

# navigate into the build output directory
cd dist
# SPA routing for github pages
mv index.html 404.html
# init repo and force push
git init

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# next github action: Commit and force Push to master branch