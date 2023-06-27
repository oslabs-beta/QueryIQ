#!/bin/sh

# Color vars
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
COLOR_OFF='\033[0m'

# Ensure OS is macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
  echo "This script is only for macOS!";
  exit 1;
fi

# Ensure Intel chip
if [[ "$HOSTTYPE" != "x86_64" ]]; then
  echo "This script is only for Intel chips!";
  exit 1;
fi

# Install Grafana Agent from binary if doesn't exist
if [ ! -f ./grafana-agent-darwin-amd64 ]; then
  curl -O -L "https://github.com/grafana/agent/releases/latest/download/grafana-agent-darwin-amd64.zip";
  unzip "grafana-agent-darwin-amd64.zip";
  chmod a+x "grafana-agent-darwin-amd64";
fi

# Ensure .env file exists
if [ ! -f ./.env ]; then
  echo "Please create a .env file with the following variables: GRAFANA_CLOUD_MACOS_AMD64_BINARY_API_KEY, GRAFANA_GCLOUD_HOSTED_METRICS_URL, GRAFANA_GCLOUD_HOSTED_METRICS_ID, GRAFANA_GCLOUD_HOSTED_LOGS_URL, GRAFANA_GCLOUD_HOSTED_LOGS_ID";
  exit 1;
fi

# Set environment variables
ARCH="amd64" 
GCLOUD_HOSTED_METRICS_URL="$(grep GRAFANA_GCLOUD_HOSTED_METRICS_URL .env | cut -d '=' -f2-)"
GCLOUD_HOSTED_METRICS_ID="$(grep GRAFANA_GCLOUD_HOSTED_METRICS_ID .env | cut -d '=' -f2-)" 
GCLOUD_SCRAPE_INTERVAL="60s" 
GCLOUD_HOSTED_LOGS_URL="$(grep GRAFANA_GCLOUD_HOSTED_LOGS_URL .env | cut -d '=' -f2-)" 
GCLOUD_HOSTED_LOGS_ID="$(grep GRAFANA_GCLOUD_HOSTED_LOGS_ID .env | cut -d '=' -f2-)"
GCLOUD_RW_API_KEY="$(grep GRAFANA_CLOUD_MACOS_AMD64_BINARY_API_KEY .env | cut -d '=' -f2-)=="

if [ -z "$GCLOUD_HOSTED_METRICS_URL" ] || [ -z "$GCLOUD_HOSTED_METRICS_ID" ] || [ -z "$GCLOUD_SCRAPE_INTERVAL" ] || [ -z "$GCLOUD_HOSTED_LOGS_URL" ] || [ -z "$GCLOUD_HOSTED_LOGS_ID" ] || [ -z "$GCLOUD_RW_API_KEY" ]; then
  echo "${RED}Please ensure all environment variables are set in .env file${COLOR_OFF}";
  exit 1;
else
  echo "${GREEN}Environment variables correctly set in .env file, following warning is a race condition that is actually resolved.${COLOR_OFF}";
  /bin/sh -c "$(curl -fsSL https://storage.googleapis.com/cloud-onboarding/agent/scripts/grafanacloud-install-darwin.sh)"

fi

# Fetch config file from Grafana Cloud


# Move config file to root dir
# if ./grafana-config.yml does not exist, move from /usr/local/etc/grafana-agent/config.yaml
if [ ! -f ./grafana-config.yml ]; then
  mv /usr/local/etc/grafana-agent/config.yml ./grafana-config.yml
fi

# Run the Agent if not currently running, otherwise kill and restart
if lsof -Pi :12345 -sTCP:LISTEN -t >/dev/null ; then
    kill -9 $(lsof -t -i:12345) && ./grafana-agent-darwin-amd64 --config.file=./grafana-config.yml
else
    ./grafana-agent-darwin-amd64 --config.file=./grafana-config.yml
fi
