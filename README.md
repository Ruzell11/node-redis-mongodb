# Project README

This project demonstrates the integration of Docker with Express, MongoDB, and Redis technologies. By utilizing Docker, you can easily set up and manage a development environment that includes an Express.js application, a MongoDB database, and a Redis server.

## Prerequisites

Before you begin, ensure you have the following software installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to set up and run the project:

1. Clone this repository to your local machine:

   ```bash
    https://github.com/Ruzell11/node-redis-mongodb.git
2. Change directory
 ```bash
cd node-redis-mongodb
```

3. Set .env

```bash
PORT=3000
MONGO_PORT=27017
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=example
MONGO_DB_IP=db-app-container
```
Run the following command to start the project using Docker Compose:
```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```
To stop the project and shut down the containers, run:
```bash
docker-compose down
```

Access the application by visting
```bash
localhost:3000
```


