#!/bin/bash
# Build and start the API service first
docker-compose build postgres api
docker-compose up postgres api -d

# wait for api service to be ready
chmod +x ./frontend/wait-for-it.sh
./frontend/wait-for-it.sh localhost:8080/actuator/health --timeout=300 --strict -- echo "API is up, starting frontend build..."


# Build and start the frontend service
docker-compose build frontend
docker-compose up frontend -d