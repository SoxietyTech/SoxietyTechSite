FROM node:lts

WORKDIR /

COPY package*.json ./

RUN npm install express
RUN npm install dotenv
RUN npm install path

COPY . .


ENV PORT=9000

EXPOSE 9000

CMD ["npm" , "start"]