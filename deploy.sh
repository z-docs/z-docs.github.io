#!/usr/bin/env sh

# abort on errors
set -e
# build vuepress
yarn build

cd docs/.vuepress/dist
git init
git add -A
git commit -m deploy

git push -f https://github.com/z-docs/z-docs.github.io.git master:master

cd -

