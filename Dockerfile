FROM node:16-alpine
ARG BUILD_CONTEXT
ENV BUILD_CONTEXT ${BUILD_CONTEXT}

WORKDIR /base

COPY package.json .
COPY yarn.lock .

COPY ./$BUILD_CONTEXT/package.json /$BUILD_CONTEXT/
RUN yarn install

COPY . .
RUN yarn build:$BUILD_CONTEXT

EXPOSE 3000 3001

CMD yarn workspace ${BUILD_CONTEXT} start