FROM node:11 as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM gatsbyjs/gatsby:latest
WORKDIR /pub
COPY --from=build /usr/src/app/public .

EXPOSE 80
CMD [ "/sbin/nginx-boot" ]
