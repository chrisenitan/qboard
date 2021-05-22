FROM node:14
WORKDIR /app
RUN npm install nodemon -g
COPY package* /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]