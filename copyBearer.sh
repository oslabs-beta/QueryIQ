#!/bin/bash

CONTAINER_ID=$(docker ps | grep custom | cut -b -12)

docker cp "$CONTAINER_ID":/var/lib/grafana/.service_account_token ./grafana/.service_account_token
