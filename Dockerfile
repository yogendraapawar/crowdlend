# Step 1: Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or npm-shrinkwrap.json)
# This helps to install dependencies only when package files change
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 7: Command to run the application (start React app)
CMD ["npm", "start"]

# docker run -d -p <host_port>:<container_port> --restart unless-stopped --name <name_for_container> -v /{PWD}:<work_dir> <image_name>
# docker run -d \
#     -p 3000:3000 \
#     --restart unless-stopped \
#     --name vultr-backend \
#     -v /{PWD}:/app \
#     -v /app/node_modules \
#     yogendraapawar/vultr-backend:latest 
