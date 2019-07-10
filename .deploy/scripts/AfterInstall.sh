#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" #

cd /home/ubuntu/Dev/hsp-full-site-next
npm install
npm run build
pm2 start npm --name "hsp-full-site-next" -- start