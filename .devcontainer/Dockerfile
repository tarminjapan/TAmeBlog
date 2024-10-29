# docker build -t ubuntu-tameblog -f ./Dockerfile . --no-cache

FROM ubuntu:22.04

# Create user 'vscode'
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN apt update \
    && groupadd --gid $USER_GID $USERNAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt -y install sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    && apt -y install locales \
    && localedef -f UTF-8 -i ja_JP ja_JP.UTF-8

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9
ENV TERM xterm

# Install basic libraries
RUN apt -y upgrade
RUN apt -y install curl git
RUN apt -y install vim less gcc

# Install Python
RUN apt -y install python3  python3-pip
RUN pip3 install --upgrade pip
RUN pip3 install --upgrade setuptools
RUN pip3 install flake8 autopep8 black

# Install Node.js
RUN apt -y install nodejs npm
RUN npm install -g n
RUN n lts
RUN apt -y purge nodejs npm
RUN apt -y autoremove
#RUN apt -y install yarn
RUN npm install -g yarn
