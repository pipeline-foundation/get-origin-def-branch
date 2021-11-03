FROM node:17.0.1-alpine3.14

COPY dist dist

ENTRYPOINT [ "node", "/dist/index.js" ]