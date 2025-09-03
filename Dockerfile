# Start from an official, lightweight Python base image
FROM python:3.9-slim

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the dependencies file into the container
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Tell Docker that the container will listen on port 80
EXPOSE 80

# The command to run when the container starts
CMD ["python", "app.py"]