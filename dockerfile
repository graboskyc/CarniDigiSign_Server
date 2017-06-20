FROM ubuntu:14.04

MAINTAINER graboskyc
ENV PORT=8080
ENV CONTAINER_SHELL=bash
ENV CONTAINER=

RUN apt-get clean && apt-get update && apt-get install -y git nodejs npm mongodb

RUN git clone https://github.com/graboskyc/CarniDigiSign_Server /opt/DigiSign

RUN cd /opt/DigiSign;npm install

RUN ln -s /usr/bin/nodejs /usr/bin/node
VOLUME ["/data/db"]
RUN service mongodb start
CMD cd /opt/DigiSign;npm run start;bash

EXPOSE 8080