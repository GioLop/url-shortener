FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/client
WORKDIR /opt/client
COPY package*.json ./
RUN npm install --force
RUN npm install --save react-scripts
COPY . .
EXPOSE 3000
CMD [ "npm", "start"]