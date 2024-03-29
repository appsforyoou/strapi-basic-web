FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install
WORKDIR /opt/app
COPY ./ .

WORKDIR /opt/app/src/plugins/form-manager
RUN npm install
COPY ./src/plugins/form-manager .
RUN npm run build

WORKDIR /opt/app

RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]
