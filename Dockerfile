FROM node:10-alpine

ENV PORT 3000

RUN mkdir /app && apk add --no-cache git

WORKDIR /app
COPY . .

RUN npm install && npm run build

EXPOSE 3000

CMD [ "npm", "start" ]