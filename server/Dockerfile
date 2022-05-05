FROM node:18-alpine

# Setup workdir
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code to workdir
COPY . .

# Server configs
ENV PORT=8000
EXPOSE 8000

# Start server
CMD ["node", "server.js"]
