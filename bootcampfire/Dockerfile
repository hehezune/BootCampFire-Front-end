FROM node:18.16.1

RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN npm install -g pnpm
RUN pnpm i

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["pnpm", "start"]