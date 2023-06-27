FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./
COPY .env.local ./

RUN npm install

COPY . .

RUN npm build

EXPOSE 3000

CMD ["npm", "run", "start"]
