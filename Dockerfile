#stage 1 of building angular image
FROM node:latest as build
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/
RUN npm install
COPY . /app/
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=build /app/dist/projet1 /usr/share/nginx/html