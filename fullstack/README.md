## Backend docker setup
execute the following commands to build and run the docker container
```bash
cd fullstack
docker-compose build 
docker-compose up -d mongo 
docker-compose up -d app
docker-compose up -d client
```

Now the backend is running on port 4000 and frontend is running on port 3000, you can check it by hitting the following url
```bash
http://localhost:4000
http://localhost:3000
```

command for enlisting the docker images 
```bash
docker images
```

command for stopping the docker compose
```bash
docker-compose stop
```

command for enlisting the docker containers 
```bash
docker ps -a
```

command for deleting the docker images 
```bash
docker rmi <image id>
```
