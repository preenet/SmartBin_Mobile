FROM node:18.20-alpine3.19 as build

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN apk add --no-cache nodejs yarn

RUN yarn

ARG VITE_BACKEND
ENV VITE_BACKEND=$VITE_BACKEND

RUN yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./* 
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist .
ENTRYPOINT ["nginx" , "-g" , "daemon off ;"]