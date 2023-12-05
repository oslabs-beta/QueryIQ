#!/bin/bash

# Cleans up docker images

docker images | awk '$1 == "postgres" {print $3}' | xargs -I {} docker image rm {}

