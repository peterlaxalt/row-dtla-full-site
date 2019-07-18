#!/bin/bash

cd /home/ubuntu/Dev/hsp-full-site-next
rm package-lock.json
echo "Package Lock File Deleted"
npm install
echo "Installed NPM Packages"
npm run build
pm2 start npm --name "hsp-full-site-next" -- start