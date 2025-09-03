# STAGE 1: Build the React application using a Node.js environment
FROM node:18-alpine AS builder

# Set the working directory for the build
WORKDIR /app

# Copy the package files to leverage Docker cache
COPY package*.json ./

# Install all project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Run the build command to create the optimized static files
RUN npm run build


# STAGE 2: Serve the built application using a lightweight Nginx server
FROM nginx:alpine

# Copy the built files from the 'builder' stage into the Nginx web server's public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Tell Docker that the container will listen on port 80
EXPOSE 80

# The default command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]