# Builder
FROM node:10-alpine AS builder

RUN mkdir /app && apk add --no-cache git

WORKDIR /app

COPY . .

RUN npm install && npm run build

# Executer
FROM nginx:1.17.10-alpine

COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80