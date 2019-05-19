#!/usr/bin/env bash

set -xe

 if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then
  wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
  sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
  sudo apt-get -qq update
  sudo apt-get install google-chrome-stable
  sudo apt autoremove
fi
