FROM ubuntu:16.04

RUN PACKAGES="\
        nodejs \
        nodejs-legacy \
        npm \
        wget \
        zip \
        unzip \
        git \
        libfreetype6 \
        libfontconfig \
    " && \
    apt-get update && \
    apt-get install -y $PACKAGES && \
    apt-get autoremove --purge -y && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
