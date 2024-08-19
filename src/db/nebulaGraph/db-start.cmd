@REM docker-compose.exe up -d

docker network create nebula-net
docker run -d --name nebula-metad --network nebula-net -p 9559:9559 vesoft/nebula-metad:v3.8.0
docker run -d --name nebula-storaged --network nebula-net -p 9779:9779 vesoft/nebula-storaged:v3.8.0
docker run -d --name nebula-graphd --network nebula-net -p 9669:9669 -p 19669:19669 -p 19670:19670 vesoft/nebula-graphd:v3.8.0
docker run -d --name nebula-graph-studio --network nebula-net -p 7001:7001 -e USER_PASSWD=true vesoft/nebula-graph-studio:v3.5.0
