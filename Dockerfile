FROM node:10-alpine

RUN mkdir /app && apk add --no-cache git

WORKDIR /app
COPY . .

RUN npm install && npm run build
