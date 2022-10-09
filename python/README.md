# Docker

To test locally make sure [colima](https://github.com/abiosoft/colima) or another Docker runtime is installed and active. Then, build the docker image with

 ```
docker build --platform linux/amd64  -t lambdas .
 ```

 Run the docker container with

 ```
 docker run -p 9000:8080 lambdas 
 ```

 You can test the Docker container with

```
 curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```