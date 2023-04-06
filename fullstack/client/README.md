## Frontend Docker Setup
execute the following commands to build the docker container
```bash
cd frontend
docker build -t frontend .
```

Now the frontend is running on port 4000, you can check it by hitting the following url
```bash
http://localhost:3000
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
docker run -p 3000:3000 frontend or docker run -p 3000:3000 <image id>
```


command for stopping the docker container
```bash
docker stop frontend or docker stop <container id>
```

command for enlisting the docker containers 
```bash
docker ps -a
```

command for deleting the docker images 
```bash
docker rmi frontend or docker rmi <image id>
```
