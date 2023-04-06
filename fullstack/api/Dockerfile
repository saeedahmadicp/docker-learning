FROM node

# Create app directory
WORKDIR /app

# Copy package.json to main directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port 3000
EXPOSE 4000

# Run app
CMD [ "npm", "start" ]