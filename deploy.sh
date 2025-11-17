#!/usr/bin/env sh

set -e

yarn build

cd dist

git init
git add -A
git commit -m "Deploy"
git push -f git@github.com:scramel/lytflos.git main:gh-pages

cd -
