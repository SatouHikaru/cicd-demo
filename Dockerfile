FROM node:18-alpine

# Create app directory
WORKDIR /var/www/html

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

COPY .env.example .env

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Start the server using the production build
CMD [ "npm", "start" ]
