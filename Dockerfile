FROM oven/bun:1.1 AS base

WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install

COPY . .

RUN bun run build

FROM oven/bun:1.1 AS runtime

WORKDIR /app

COPY --from=base /app/dist ./dist

RUN bun add serve

CMD ["bun", "x", "serve", "dist", "-l", "3001"]
