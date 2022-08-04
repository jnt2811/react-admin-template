FROM node:17

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/

RUN npm install

COPY . /app/

RUN npm run build

EXPOSE 3000

RUN npm install -g serve

RUN npm install xsel

CMD ["serve","-n","build"]
