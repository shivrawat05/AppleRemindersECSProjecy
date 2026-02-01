# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

ENV NODE_ENV=production

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy app files
COPY . .

# Expose the app port
EXPOSE 3001

# Command to run the app
CMD ["node", "src/index.js"]