FROM node

## working directory
WORKDIR /client

## copy package.json and package-lock.json
COPY package*.json /client/


## install dependencies
RUN npm install

## copy source code
COPY . /client/

## expose port 3000
EXPOSE 3000

## start app
CMD ["npm", "start"]