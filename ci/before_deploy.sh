#!/bin/env sh

set -ex

main() {
  local src=$(pwd) \
    stage="$(mktemp -d)"
  local stage_full="$stage/sks-frontend"

  mkdir $stage_full
  cp -r dist/* $stage_full

  cd $stage
  tar czf $src/sks-frontend-$TRAVIS_TAG.tar.gz *
  tar cjf $src/sks-frontend-$TRAVIS_TAG.tar.bz2 *
  zip -r $src/sks-frontend-$TRAVIS_TAG.zip *
  cd $src

  rm -rf $stage
}

main
