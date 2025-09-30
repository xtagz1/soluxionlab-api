# Use the latest Node.js image as the base
FROM node:latest

# Set the timezone environment variable
ENV TZ=Asia/Manila

# Install necessary packages and set timezone
RUN apt-get update -y && apt-get install -y tzdata openssl && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the application code
COPY . .

# Install dependencies
RUN npm install

# Rebuild bcrypt with source
RUN npm rebuild bcrypt --build-from-source

# Build the application
RUN npm run build

# Generate Prisma client
RUN npx prisma generate

# Copy the entrypoint script
# COPY entrypoint.sh /app/entrypoint.sh

# Make the entrypoint script executable
# RUN chmod +x /app/entrypoint.sh

# Expose the application port
EXPOSE 8000

# Set the custom entrypoint
# ENTRYPOINT ["/app/entrypoint.sh"]

# This configuration is made for DigitalOcean App Platform
# CMD sh -c "npm run prod & npm run start-worker"
