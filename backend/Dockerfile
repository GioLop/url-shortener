FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/backend
WORKDIR /opt/backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "sh", "runner.sh"]