---
icon: material/docker
---

# 1. :rocket:  Docker

:link: https://docs.docker.com/get-started/08_using_compose/

!!! example "docker-compose.yml"
    ```yaml
    version: "3.9"

    services:
        postgres: # Becomes a network alias name
            image: postgres:14-alpine
            ports:
                - 5432:5432
            volumes:
                - ~/apps/postgres:/var/lib/postgresql/data
            environment: # Defines environment variables
                - POSTGRES_PASSWORD=password
                - POSTGRES_USER=user
                - POSTGRES_DB=student
    ```

!!! tip "Starting the container"
    To start the container, run:

    ```bash
    docker-compose up -d
    ```

    - `up` brings up the container
    - `-d` runs in detached mode

!!! warning "Deleting and stopping containers"
    To delete container:
    ```bash
    docker-compose down
    ```
    To stop it:
    ```bash
    docker-compose stop
    ```

## 1.1. :gear: Other Docker Compose params

- `restart: always` restarts after reboot

## 1.2. :globe_with_meridians: Networks

!!! example "Network configuration example"
    ```yaml
    version: "3.9"

    services:
        website: # Becomes a network alias name
            image: nginx
            ports:
                - 8081:80
        website2: # Becomes a network alias name
            image: nginx
            ports:
                - 8082:80
            network:
                website_net:
                    ipv4_address: 192.168.92.21
    networks:
        website_net:
            ipam: #ip address management
                driver: default # bridge is default
            config:
                - subnet: 192.168.92.0/24
    ```