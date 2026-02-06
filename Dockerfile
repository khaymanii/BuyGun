# -------- 1. Build stage --------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and lockfile
COPY package*.json ./

# Install all dependencies (including dev for build)
RUN npm ci

# Copy the source code
COPY . .

# Build the Vite app
RUN npm run build

# -------- 2. Production stage --------
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Only copy package.json and production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the built files
COPY --from=builder /app/dist ./dist

# Expose port for Vite preview
EXPOSE 4173

# Start the Vite preview server
CMD ["npx", "vite", "preview", "--port", "4173", "--host"]
