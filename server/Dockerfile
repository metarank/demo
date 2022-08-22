FROM node:16-alpine
ENV ADDRESS=0.0.0.0


WORKDIR /base

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build-ts

EXPOSE 3001

CMD node ./dist/src/app.js