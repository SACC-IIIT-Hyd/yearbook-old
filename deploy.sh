#!/bin/bash

docker compose -p yearbook -f docker-compose.prod.yml down
docker compose -p yearbook -f docker-compose.prod.yml up --build -d
/var/proxy_container.sh -c yearbook-nginx-1 -d yearbook-sacc.iiit.ac.in -p 80
