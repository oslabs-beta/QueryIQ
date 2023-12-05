#!/bin/bash

# Cleans up docker containers


docker ps -a | grep queryiq-pg | cut -b -12 | xargs -I {} docker container rm {}
docker ps -a | grep custom-grafana | cut -b -12 | xargs -I {} docker container rm {}

