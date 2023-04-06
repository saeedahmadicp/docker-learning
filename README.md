# Docker Learning
This repository contains a collection of Dockerfiles and other resources for learning Docker.

## Backend
[Backend](backend/README.md)
The backend directory contains a collection of Dockerfiles for learning how to build Docker images for backend applications.

## Frontend
[Frontend](frontend/README.md)
The frontend directory contains a collection of Dockerfiles for learning how to build Docker images for frontend applications.

## Fullstack
[Fullstack](fullstack/README.md)
The fullstack directory contains a collection of Dockerfiles for learning how to build Docker images for fullstack applications.

## Background
Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code. 

## Dockerfiles
Dockerfiles are a set of instructions that Docker reads and executes in order to build a Docker image. Docker images are read-only templates that contain a set of instructions for creating a Docker container. Docker containers are run-time instances of Docker images.

## Dockerfile Commands
Dockerfile commands are used to build Docker images. The following is a list of the most commonly used Dockerfile commands:

* `FROM` - Sets the Base Image for subsequent instructions.
* `RUN` - Executes commands in a new layer on top of the current image and commits the results.
* `CMD` - Provides defaults for an executing container.
* `LABEL` - Adds metadata to an image.
* `EXPOSE` - Informs Docker that the container listens on the specified network ports at runtime.
* `ENV` - Sets the environment variable.
* `ADD` - Copies new files, directories or remote file URLs from `<src>` and adds them to the filesystem of the image at the path `<dest>`.
* `COPY` - Copies new files or directories from `<src>` and adds them to the filesystem of the container at the path `<dest>`.
* `ENTRYPOINT` - Configures a container that will run as an executable.
* `VOLUME` - Creates a mount point with the specified name and marks it as holding externally mounted volumes from native host or other containers.
* `USER` - Sets the user name for following RUN / CMD / ENTRYPOINT commands.
* `WORKDIR` - Sets the working directory.
* `ARG` - Defines a variable that users can pass at build-time to the builder with the docker build command using the `--build-arg <varname>=<value>` flag.
* `ONBUILD` - Adds a trigger instruction to an image. The trigger will be executed at a later time, when the image is used as the base for another build.

## Dockerfile Best Practices
The following is a list of best practices for writing Dockerfiles:

* Use only one `RUN` command per `Dockerfile` instruction.
* Use `COPY` instead of `ADD` for files and directories.
* Use `CMD` instead of `ENTRYPOINT` for running applications.
* Use `ENTRYPOINT` for running commands that need to be run before the application is started.
* Use `EXPOSE` to document which ports are used by the container.
* Use `VOLUME` to document which volumes are used by the container.
* Use `ENV` to set environment variables.
* Use `ARG` to set build-time variables.
* Use `LABEL` to add metadata to an image.
* Use `USER` to run the process as a non-root user.
* Use `WORKDIR` to set the working directory.
* Use `HEALTHCHECK` to check that the container is still working.
* Use `SHELL` to change the default shell.
* Use `--chown` flag to avoid permission issues.

## Getting Started with Docker
* [Docker overview](https://docs.docker.com/get-started/overview/)
* [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)
* [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)