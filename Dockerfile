FROM node:16.11.1-alpine3.14

COPY dist dist

ENTRYPOINT [ "node", "/dist/index.js" ]