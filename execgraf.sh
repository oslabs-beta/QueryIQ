#!/bin/bash

container_id=$(docker ps | grep custom | cut -b -12)
docker exec -it "$container_id" /bin/bash

