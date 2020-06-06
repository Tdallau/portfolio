# stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm rebuild node-sass
RUN npm run build --prod

# stage 2
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
FROM nginx:alpine
COPY --from=node /app/dist/portfolio2 /usr/share/nginx/html

# stage 3
VOLUME /usr/share/nginx/html
VOLUME /etc/nginx