#!/bin/bash

# Cleans up docker images


docker images | awk '$1 == "expressqueryiq-custom-grafana" {print $3}' | xargs -I {} docker image rm {}
yes | docker volume prune
docker volume rm expressqueryuq_grafana-storage
