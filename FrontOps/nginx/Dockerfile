FROM nginxinc/nginx-unprivileged:1-alpine
COPY ./default.conf.template /etc/nginx/default.conf.template
ENV API_BASE_URL=www.example.com
USER root
RUN touch /etc/nginx/conf.d/default.conf
RUN chown nginx:nginx /etc/nginx/conf.d/default.conf
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
USER nginx
CMD ["/entrypoint.sh"]
