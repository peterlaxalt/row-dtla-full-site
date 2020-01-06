# hsp-full-site-next

Hudson Square Properties Full Site (Next.js)

# Hosting

Hosting is on an EC2 instance. The server uses PM2 (node production process manager) and NGINX to host this Next.JS site. There is a production and dev site both running on this server. The sites live in `~/Dev`. The server blocks are configured in `/etc/nginx/sites-available` and both sites are running as background processes via PM2.

You can see the PM2 Processes running via `pm2 ls`

After pushing code you need to run the following commands on the server:

- `git pull`
- `npm run build`
- `pm2 restart next or pm2 restart nextDev` (depending on which folder)
