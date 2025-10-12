#!/bin/bash
URL="https://v2.stepstokindness.org"

echo "Testing site availability..."
curl -Is "$URL" | head -n 1

echo "Checking title..."
if curl -s "$URL" | grep -q "Steps to Kindness"; then
  echo "✅ Title check passed"
else
  echo "❌ Title check failed"
  exit 1
fi

echo "All tests done."
