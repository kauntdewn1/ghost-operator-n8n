# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies)
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built assets and package files
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install ALL dependencies (including devDependencies) for preview server
RUN npm install

# Expose port
EXPOSE 5678

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5678/healthz || exit 1

# Start the app
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5678"] 