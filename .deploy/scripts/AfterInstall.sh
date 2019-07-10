#!/bin/bash

npm install
npm run build
pm2 start "hsp-full-site-next" || true