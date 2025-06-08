FROM node:20 AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Step 2: Serve with Vite's preview server
FROM node:20 AS runner

WORKDIR /app
COPY --from=builder /app /app

RUN npm install -g serve

EXPOSE 4173

CMD ["npm", "run", "preview"]
