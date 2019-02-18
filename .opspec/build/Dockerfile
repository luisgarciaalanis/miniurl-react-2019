FROM nginx:1.15

EXPOSE 7000

WORKDIR /app

COPY build/ build
COPY .opspec/build/run.sh run.sh
COPY .opspec/debug/serve/nginx.conf /etc/nginx/nginx.conf

CMD run.sh
