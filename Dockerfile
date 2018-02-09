FROM node:9.5.0

# prepare a user which runs everything locally! - required in child images!
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
WORKDIR $HOME

RUN npm install -g angular-cli@1.6.8 && npm cache clean

EXPOSE 4200
