FROM node:18-alpine

# Create workdir
WORKDIR /app

# Install dependecies
COPY package*.json ./
RUN npm install

# Copy source code to workdir
COPY . .

# Configs
ENV PORT=3000
EXPOSE 3000

# Start app
CMD ["npm", "start"]
