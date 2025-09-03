# Start from the official, lightweight Nginx web server image
FROM nginx:alpine

# Copy your website's files into the default Nginx web root directory
COPY . /usr/share/nginx/html
