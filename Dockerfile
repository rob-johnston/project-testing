FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.4.0/wait /wait
RUN chmod +x /wait
CMD /wait && node bin/db-init.js && node src/
EXPOSE 3030
