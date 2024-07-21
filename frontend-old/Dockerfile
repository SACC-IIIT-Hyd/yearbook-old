# cache dependencies
FROM node:20-slim AS node_cache
WORKDIR /cache/
COPY package*.json .
RUN npm i -g pnpm
# RUN pnpm cache clear --force
# RUN pnpm install --prefer-offline --no-audit --progress=true --loglevel verbose --omit=dev
RUN pnpm install

# build and start
FROM node:20-slim AS build
WORKDIR /app
COPY --from=node_cache /cache/ .
COPY . .
RUN npm i -g pnpm
RUN /usr/local/bin/pnpm run build
ENTRYPOINT [ "/usr/local/bin/pnpm", "start" ]
