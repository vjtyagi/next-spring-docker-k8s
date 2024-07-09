#!/bin/sh
set -e

URL="$1"
COMMAND="$2"

if [ -z "$URL" ]; then
  echo "Usage: $0 host:port/health_endpoint command"
  exit 1
fi

HOST=$(echo "$URL" | cut -d':' -f1)
PORT=$(echo "$URL" | cut -d':' -f2 | cut -d'/' -f1)
HEALTH_ENDPOINT="/$(echo "$URL" | cut -d'/' -f2-)"

echo "Waiting for API to be ready at http://${HOST}:${PORT}${HEALTH_ENDPOINT}"

start_time=$(date +%s)
TIMEOUT=300
STRICT=true

while :; do
  if [ $(($(date +%s) - start_time)) -ge "$TIMEOUT" ]; then
    if [ "$STRICT" = true ]; then
      echo "Timeout reached. API is still not ready."
      exit 1
    else
      echo "Timeout reached. Proceeding without API being ready."
      break
    fi
  fi

  health_status=$(curl -fsS -m 5 "http://${HOST}:${PORT}${HEALTH_ENDPOINT}" || true)
  if [ -n "$health_status" ] && echo "$health_status" | grep -q '"status":"UP"'; then
    echo "API is up and running!"
    break
  else
    echo "API is not ready yet. Retrying in 5 seconds..."
    sleep 5
  fi
done

echo "API is ready. Proceeding with the build."
exec $COMMAND
