# Pull node image from docker hub
FROM node:16

# Set working directory
RUN mkdir -p /var/www/todo-app
WORKDIR /var/www/todo-app

# Copy existing application directory contents
COPY . /var/www/todo-app
# install all dependencies
RUN npm cache clean --force
RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "start" ]