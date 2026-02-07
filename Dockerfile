# -------- 1. Build stage --------
FROM node:20-alpine AS builder

WORKDIR /app

# Accept build-time env vars
ARG VITE_FIREBASE_API_KEY

ENV VITE_FIREBASE_API_KEY=$VITE_FIREBASE_API_KEY

# Copy package.json and lockfile
COPY package*.json ./

# Install all dependencies (including dev for build)
RUN npm ci

# Copy the source code
COPY . .

# Build the Vite app
RUN npm run build

# -------- 2. Production stage --------

# Start the Vite preview server
FROM node:20-alpine

WORKDIR /app

# Only copy build output
COPY --from=builder /app/dist ./dist

# Install only vite (tiny)
RUN npm install -g vite

EXPOSE 4174

CMD ["npx", "vite", "preview", "--port", "4174", "--host"]
