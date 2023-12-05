#!/bin/bash

# Create the AnonOrg org
/setOrg.sh

echo 'Grabbing org id...'
# Grab the org id from the new org
ORG_ID=$(curl -s -u admin:admin http://localhost:3000/api/orgs/1 | awk -F '[:,]' '/"id"/{print $2}')

echo -e "ORGID: $ORG_ID"
echo ''

echo 'Switching to AnonOrg...'
# Switch the org context for the Admin user to AnonOrg
curl -X POST http://admin:admin@localhost:3000/api/user/using/$ORG_ID

echo ''

echo 'Creating new service account...'
# Create new service account
SERVICE_ACCOUNT_ID=$(curl -s -X POST -H "Content-Type: application/json" -d '{"name":"test", "role": "Admin"}' -u admin:admin http://localhost:3000/api/serviceaccounts | grep -o '"id":[^,}]*' | awk -F ':' '{print $2}')

echo -e "SERVICE_ACCOUNT_ID: $SERVICE_ACCOUNT_ID"
echo ''

echo 'Creating new service account token...'
# Create new service account token
SERVICE_ACCOUNT_TOKEN=$(curl -s -X POST -H "Content-Type: application/json" -d '{"name":"test-token"}' http://admin:admin@localhost:3000/api/serviceaccounts/$SERVICE_ACCOUNT_ID/tokens | grep -o '"key":[^,}]*' | awk -F ':' '{print $2}' | tr -d '"')


# SERVICE_ACCOUNT_TOKEN=$(curl -s -X GET -H "Content-Type: application/json" -u admin:admin http://localhost:3000/api/serviceaccounts/$SERVICE_ACCOUNT_ID/tokens | awk -F '[:,]' '/"key"/{print $4;exit}' | tr -d '"')

echo 'Exporting service account token...'
echo "$SERVICE_ACCOUNT_TOKEN" > /var/lib/grafana/.service_account_token

cat /var/lib/grafana/.service_account_token
echo "Done"
