FROM node:12

WORKDIR /server

COPY . .

RUN cd /server && npm ci

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD sleep 15 && npm run dev
