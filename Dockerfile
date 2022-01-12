FROM node:16.13.2-alpine3.14

COPY dist dist

ENTRYPOINT [ "node", "/dist/index.js" ]