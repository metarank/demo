FROM node:16
ENV ADDRESS=0.0.0.0


WORKDIR /base

COPY package*.json .

RUN npm ci --production

COPY . .

RUN npm run build-ts

EXPOSE 3001

CMD node ./dist/src/app.js