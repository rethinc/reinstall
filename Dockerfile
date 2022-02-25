FROM node:16.13.0
WORKDIR /app
RUN mkdir -p /app/dist
RUN echo "Hallo Krabbi!" > /app/dist/index.html

FROM nginx:1.21.4-alpine
ARG version
COPY ./docker/nginx-default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/dist /usr/share/nginx/html
ENV version=$version
EXPOSE 80