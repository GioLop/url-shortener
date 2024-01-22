FROM node:18.16.0-alpine3.17
RUN mkdir -p /home/node/client
RUN chown -R node:node /home/node/client && chmod -R 770 /home/node/client/
WORKDIR /home/node/client
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start"]