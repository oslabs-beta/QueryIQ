#!/bin/bash

# Check for containers
echo 'Containers:'
docker container list -a | awk '$12 == "queryiq-pg" {print $1, $2, $12}'
docker container list -a | awk '$2 == "expressqueryiq-custom-grafana" {print $1, $2, $13}'
echo ''

# Check for images
echo 'Images:'
docker image list | awk '$1 == "expressqueryiq-custom-grafana" {print $3, $1}'
docker images | awk '$1 == "postgres" {print $3, $1}'
# docker image list | grep postgres
echo ''

# Check for volumes
echo 'Volumes:'
docker volume list | grep expressqueryiq_grafana-storage



