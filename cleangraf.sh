#!/bin/bash

# Cleans up docker images

echo 'Removing custom-grafana image...'
docker images | awk '$1 == "expressqueryiq-custom-grafana" {print $3}' | xargs -I {} docker image rm {}

sleep 1

echo 'Clean up unused docker volumes?'
docker volume prune

echo 'Removing grafana storage volume...'
docker volume rm expressqueryiq_grafana-storage

