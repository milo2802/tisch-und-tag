#!/bin/bash
cd -- "$(dirname -- "$0")" || exit 1
TASK_NODE_BIN="$(command -v node)"
if [ -z "$TASK_NODE_BIN" ]; then
  TASK_NODE_BIN='/Applications/ChatGPT.app/Contents/Resources/cua_node/bin/node'
fi
if [ ! -x "$TASK_NODE_BIN" ]; then
  echo 'Bitte Node.js 22 oder neuer installieren.'
  read -r -p 'Mit Enter schließen.'
  exit 1
fi
TASK_LAN_IP="$(/usr/sbin/ipconfig getifaddr en0 2>/dev/null)"
echo 'Tisch & Tag – zum Beenden Strg+C drücken. Dieses Fenster geöffnet lassen.'
echo "Auf dem Handy im selben WLAN öffnen: http://${TASK_LAN_IP:-RECHNER-IP}:8080"
HOST=0.0.0.0 "$TASK_NODE_BIN" server.mjs
read -r -p 'Mit Enter schließen.'
