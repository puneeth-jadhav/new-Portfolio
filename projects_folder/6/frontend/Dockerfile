FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with --legacy-peer-deps to bypass peer dependency issues
RUN npm install --legacy-peer-deps || npm install --force

# Copy the rest of the application
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Set environment variables
ENV NODE_ENV=production

# Start the app with host parameter to allow external connections
CMD ["npm", "run", "dev", "--", "--host"]