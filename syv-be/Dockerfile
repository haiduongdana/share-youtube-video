FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g pm2

COPY . .

EXPOSE 8080

CMD ["yarn", "docker-start"]
