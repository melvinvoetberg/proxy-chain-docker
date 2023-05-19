FROM node:lts
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 80
CMD [ "node", "index.js" ]
