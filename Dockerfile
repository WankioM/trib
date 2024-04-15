# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /trib

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .



# Set the working directory to the server directory
WORKDIR /trib/server


# Expose the port that your Express app is running on
EXPOSE 3001

# Start the Express server
CMD ["node", "server.js"]
