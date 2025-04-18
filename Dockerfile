# Step 1: Build the React app using Node
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./ 

# Install dependencies
RUN npm install

# Copy the rest of the React app
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve the built app using Nginx
FROM nginx:stable-alpine

# Clean default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
