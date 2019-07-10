#!/bin/bash

cd /home/ubuntu/Dev/hsp-full-site-next
npm install
pm2 start --name "hsp-full-site-next" npm --run dev