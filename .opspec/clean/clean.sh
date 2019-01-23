#!/bin/sh

if [ -d /app/node_modules ]; then
    rm -rf /app/node_modules
fi

if [ -d /app/build ]; then
    rm -rf /app/build
fi
