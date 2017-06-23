FROM mongo

MAINTAINER graboskyc
ENV PORT=8080
ENV CONTAINER_SHELL=bash
ENV CONTAINER=

RUN apt-get clean && apt-get update && apt-get install -y git nodejs npm

RUN rm -rf /opt/DigiSign

RUN git clone https://github.com/graboskyc/CarniDigiSign_Server /opt/DigiSign

RUN cd /opt/DigiSign;npm install
RUN service mongodb start
RUN mongod&
RUN ln -s /usr/bin/nodejs /usr/bin/node
CMD ln -s /usr/bin/nodejs /usr/bin/node;cd /opt/DigiSign;npm run start;bash

EXPOSE 8080