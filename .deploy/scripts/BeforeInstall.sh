#!/bin/bash

if [ -d /home/ubuntu/Dev/hsp-full-site-next ]; then
  echo "Directory exists: deleting directory..."
  rm -rf /home/ubuntu/Dev/hsp-full-site-next
fi

pm2 kill || true