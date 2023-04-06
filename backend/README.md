# node-docker
Simple node and express docker 


## Simple backend docker
execute the following commands to build and run the docker image

```bash
cd backend
docker build -t simple-backend-node .
```

command for enlisting the docker images 
```bash
docker images
```

command for running the docker image 
```bash
docker run -p 4000:4000 simple-backend-node or docker run -p 4000:4000 <image id>
```


command for stopping the docker image 
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