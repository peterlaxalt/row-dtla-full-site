# hsp-full-site-next
Hudson Square Properties Full Site (Next.js)

# Hosting
Hosting is on an EC2 instance. The server uses PM2 (node production process manager) and NGINX to host this Next.JS site.

After pushing code you need to run the following commands on the server:

- `git pull`
- `npm run build`
- `pm2 restart 0`
