#!/bin/bash
set -e
if ! command -v npm >/dev/null 2>&1; then
  echo "[ERROR] npm not found. Please install Node.js and npm first." >&2
  exit 1
fi
npm install
npm run build
echo "[INFO] Dependencies installed and TypeScript code built."