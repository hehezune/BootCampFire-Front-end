FROM node:18-alpine as builder

RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN npm install -g pnpm
RUN pnpm i

FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
