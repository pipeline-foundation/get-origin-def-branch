FROM node:16.13.0-alpine3.14

COPY dist dist

ENTRYPOINT [ "node", "/dist/index.js" ]