FROM node:14.16.1 AS builder

WORKDIR /app
COPY . .
RUN npm i && npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/autonomus-monitor-client .
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
