#!/bin/bash

npm install
npm run build
pm2 start "hsp-full-site-next" || pm2 start npm --name "hsp-full-site-next" -- start