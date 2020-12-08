FROM node:12-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3333
CMD yarn typeorm migration:run ; yarn dev
