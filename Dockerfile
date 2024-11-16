# Use official Node.js LTS image as base
FROM node:18-alpine

# Set working directory
WORKDIR /client

# Copy package.json and package-lock.json or yarn.lock first
# This allows Docker to cache the dependencies layer for faster builds
COPY ./client .
# Install dependencies
RUN npm install

# Copy the entire project


# Build the Next.js project
RUN npm run build

# Expose the default Next.js port (3000)
EXPOSE 3000

# Start the Next.js application in production mode
CMD ["npm", "start"]
