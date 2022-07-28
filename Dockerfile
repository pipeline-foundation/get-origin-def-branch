FROM node:18.3.0-alpine3.14

COPY dist dist

ENTRYPOINT [ "node", "/dist/index.js" ]