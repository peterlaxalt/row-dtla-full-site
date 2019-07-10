#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" #

npm install
npm run build
pm2 start "hsp-full-site-next" || pm2 start npm --name "hsp-full-site-next" -- start