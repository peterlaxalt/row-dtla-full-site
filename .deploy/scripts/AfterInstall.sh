#!/bin/bash

cd /home/ubuntu/Dev/hsp-full-site-next
npm install
npm run build
pm2 start npm --name "hsp-full-site-next" -- start