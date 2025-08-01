FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --frozen-lockfile

COPY ./ ./

RUN yarn build

RUN mkdir -p /usr/app/.next/cache/images && \
    chown -R node:node /usr/app/.next

USER node

CMD [ "yarn", "start" ]