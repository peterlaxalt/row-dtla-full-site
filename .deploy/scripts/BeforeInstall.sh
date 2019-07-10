#!/bin/bash

pm2 ls || true
pm2 stop hsp-full-site-next || true