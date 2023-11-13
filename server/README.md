
# Task Management API - Node.js Assessment

## Overview
This is a Node.js backend assessment task where you are required to develop a RESTful API for a task management system. The API will allow users to create, read, update, and delete tasks.

## Models

### User Model
- `name`, `email`, and `password`.

### Task Model
- `title`, `description`, `dueDate`, `priority`, and `status`.

### Database Integration
- Integrated a MongoDB to store tasks.

### API Endpoints (User)
- `POST /user_registration`: Add a new user.
- `POST /user_login`: Login the user to get token & do operations.

### API Endpoints (Task)
- `GET /tasks`: Retrieve a list of all tasks.
- `POST /tasks`: Add a new task. Validate the input data.
- `GET /tasks/:id`: Retrieve a task by its ID.
- `PUT /tasks/:id`: Update a task by its ID.
- `DELETE /tasks/:id`: Delete a task by its ID.


### Authenticated using JWT (Json Web Token)
- Implemented a simple JWT-based authentication system to protect the API endpoints.


## Steps to run

       1. Clone the repo.
       2. Make sure that you have installed node.
       3. within the server directory, run: npm i && npm start
       4. Check end points with Postman
