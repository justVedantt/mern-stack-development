#!/bin/bash

while true
do
    fswatch -1 .

    sleep 120

    git add .

    git commit -m "auto update: $(date '+%Y-%m-%d %H:%M:%S')" || true

    git push

    echo "Changes pushed to GitHub"
done
