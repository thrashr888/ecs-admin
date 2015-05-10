# DOCKER-VERSION 1.6

FROM node:onbuild

MAINTAINER Paul Thrasher <thrashr888@gmail.com>

RUN node_modules/.bin/gulp build

EXPOSE  8080
