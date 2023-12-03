docker run -d -p 3000:3000 --name=grafana \
  --volume grafana-storage:/var/lib/grafana \
  -e GF_SECURITY_ADMIN_USER=admin \
  -e GF_SECURITY_ADMIN_PASSWORD=password \
  -e GF_AUTH_ANONYMOUS_ENABLED=true \
  -e GF_ORG_NAME="AnonOrg" \
  -e GF_ORG_ROLE="Viewer" \
  -e GF_ALLOW_EMBEDDING=true \
  grafana/grafana-enterprise
