#!/bin/bash

# Function to check if Grafana is running and listening on port 3000
waitForGrafana() {
  until $(curl --output /dev/null --silent --head --fail http://localhost:3000); do
    echo "Waiting for Grafana to start..."
    sleep 2
  done
}

# Wait for Grafana to become available
waitForGrafana

# Run the curl command to set the organization
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X PUT -d '{"name":"AnonOrg"}' -u admin:admin http://localhost:3000/api/orgs/1

curl admin:admin@localhost:3000/api/orgs/1

