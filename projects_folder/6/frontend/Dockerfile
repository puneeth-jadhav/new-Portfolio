FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install || npm install --legacy-peer-deps || npm install --force
COPY . .
EXPOSE 5173
ENV NODE_ENV=production
CMD ["npm", "run", "dev", "--", "--host"]
