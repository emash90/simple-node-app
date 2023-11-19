# Authentication Project with Node.js, Express, MongoDB, Redis, React, and Nginx

## Overview

This project implements user authentication with login and signup functionality using Node.js, Express, MongoDB, Redis, React, and Nginx. The application is containerized using Docker for easy deployment and scalability.

## Features

- New User registration
- User login with session management using Redis.
- MongoDB for data storage.
- Nginx for load balancing.

## Technologies Used

- Node.js
- Express
- MongoDB
- Redis
- React
- Docker
- Nginx

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/authentication-project.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd authentication-project
    ```

3. **Build and start the Docker containers:**

    ```bash
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d
    ```

4. **Access the application at [http://localhost](http://localhost).**

## Live Demo

The project is hosted on a Linode Cloud Server and is accessible through the following live link: [Live Demo](http://45.79.214.16/)



