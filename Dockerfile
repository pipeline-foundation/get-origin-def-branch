FROM node:16.14.0-alpine3.14

COPY dist dist

ENTRYPOINT [ "node", "/dist/index.js" ]