# feel free to select here a specific nginx version to avoid future breaking changes.
FROM nginx:latest

COPY dist/ /usr/share/nginx/html
COPY deployment/production/nginx.conf /etc/nginx/nginx.conf

VOLUME /etc/nginx/certs

EXPOSE 80
EXPOSE 443
