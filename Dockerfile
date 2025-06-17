FROM node:18-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build


# --- Runtime Layer ---
FROM nginx:stable-alpine

# Установка tini и node
RUN apk add --no-cache nodejs tini

# Копируем build
WORKDIR /app
COPY --from=build /app/.output ./.output
COPY --from=build /app/package.json ./package.json

# Копируем nginx конфиг
COPY nginx.conf /etc/nginx/nginx.conf

# Добавляем скрипт запуска
COPY docker-entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["/entrypoint.sh"]
