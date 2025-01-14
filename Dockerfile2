# Using node:16-alpine base image
FROM node:alpine 

# Set /app as the default work directory
WORKDIR /app

# copy package.json to the working directory for packages installation
#COPY package.json /app

COPY package*.json .
#COPY packege-lock.json . 
RUN npm  install 

# Install npm dependencies
#RUN yarn install -y

# Copy all the project files to the working directory
COPY . .

RUN npm run build

# Expose the port of your application to bind with the host port
EXPOSE 3000

# run your app
#CMD ['yarn', 'run', 'start']
CMD ['npm', 'start' ]
