#!/bin/sh

# Запускаем сервер Nuxt
node /app/.output/server/index.mjs &

# Запускаем nginx (в foreground)
nginx -g 'daemon off;'
