FROM node:18.16.1

RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN npm install
RUN npm run build

FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
