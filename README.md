# simple-node-app
This repository contains a Node.js authentication project with a React front end, an Express server for the backend, MongoDB for database storage, and Redis for session management. This project provides a foundation for implementing user authentication and authorization in your web applications.

Prerequisites
Before you can run this project, ensure you have the following software and tools installed on your system:

Docker: Download and Install Docker

Getting Started
Follow these steps to get the project up and running on your local machine:

Clone the repository:

shell
Copy code
git clone https://github.com/your-username/auth-node-project.git
cd into the project and run the command docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d

This will start the containers required i.e. node-backend container, react client, nginx, MongoDB and Redis in Docker containers with the required configurations.


Open your web browser and visit http://localhost to access the React front end.

Features
User registration with email and password.
User login with session management using Redis.
Protected routes that require authentication.
MongoDB for storing user data.
Docker containers for MongoDB and Redis, simplifying setup.
A basic React front end for testing authentication flows.
Folder Structure
client: Contains the React front end.
server: Contains the Express server and back-end code.
docker-compose files: Contains Docker Compose scripts to start the required containers
scripts: Contains helpful scripts for setting up the project.
Contributing
Feel free to contribute to this project by opening issues or pull requests. Please follow our code of conduct.

License
This project is licensed under the MIT License. See the LICENSE file for details.


