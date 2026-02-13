# Frontend React
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de servidor
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
