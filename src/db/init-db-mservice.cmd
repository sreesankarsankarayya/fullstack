docker stop couchdb
docker rm couchdb
docker run -d -p 5984:5984 --name couchdb -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=admin couchdb:3.3.3
