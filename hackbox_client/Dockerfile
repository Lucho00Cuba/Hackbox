FROM node:12

COPY ./src /usr/hackbox/client

WORKDIR /usr/hackbox/client

RUN npm install && \
    npm run-script build