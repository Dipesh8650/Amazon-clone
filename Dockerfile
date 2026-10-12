FROM nginxinc/nginx-unprivileged:1.28-alpine
COPY index.html index.css index.js /usr/share/nginx/html/
COPY amazon_logo.png hero_image.jpg box*_image.jpg /usr/share/nginx/html/
EXPOSE 8080
