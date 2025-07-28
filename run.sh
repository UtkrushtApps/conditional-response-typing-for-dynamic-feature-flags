#!/bin/bash
set -e
./install.sh
npm start
if [ $? -eq 0 ]; then
  echo "[INFO] Event pipeline started successfully."
else
  echo "[ERROR] Failed to start the event pipeline." >&2
fi