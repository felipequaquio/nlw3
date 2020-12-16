FROM node:12-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE ${LOCAL_SERVER_PORT}
CMD yarn typeorm migration:run ; yarn dev
