#!/usr/bin/env sh

set -e

pnpm build

cd dist

rm -rf .git

git init -b main
git add -A
git commit -m "Deploy"
git push -f git@github.com:scramel/lytflos.git main:gh-pages

cd -
