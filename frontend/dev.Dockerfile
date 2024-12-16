# build and start
FROM node:20-slim as build
WORKDIR /app
EXPOSE 80
ENTRYPOINT [ "npm", "run", "dev" ]