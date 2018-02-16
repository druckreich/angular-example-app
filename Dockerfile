FROM node:9.5.0
WORKDIR /APP

# prepare a user which runs everything locally! - required in child images!
# RUN useradd --user-group --create-home --shell /bin/false app

RUN apt-get update -qqy \
    && apt-get -qqy install vim

COPY package.json /game-app
RUN npm install -g @angular/cli
RUN npm install

COPY . /game-app

RUN npm install -g @angular/cli@1.6.8 && npm cache clean

EXPOSE 80
