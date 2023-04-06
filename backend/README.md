## Simple backend docker
execute the following commands to build the docker container
```bash
cd backend
docker-compose build 
docker-compose up -d mongo 
docker-compose up -d app
```

command for enlisting the docker images 
```bash
docker images
```

command for checking the logs of the docker container
```bash
docker logs <container id>
```

command for running the docker image
```bash
docker run -p 4000:4000 simple-backend-node or docker run -p 4000:4000 <image id>
```


command for stopping the docker container
```bash
docker stop simple-backend-node or docker stop <container id>
```

command for enlisting the docker containers 
```bash
docker ps -a
```

command for deleting the docker images 
```bash
docker rmi simple-backend-node
```
