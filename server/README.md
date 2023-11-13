
# Task Management API - Node.js Assessment

## Overview
This is a Node.js backend assessment task where you are required to develop a RESTful API for a task management system. The API will allow users to create, read, update, and delete tasks.

### Third-Party Libraries Used
- `express`: Web application framework for Node.js.
- `express-async-handler`: Utility for handling asynchronous exceptions in Express.
- `body-parser`: Middleware to parse incoming request bodies in a middleware before handlers.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing.
- `bcrypt`: A library for hashing passwords.
- `jsonwebtoken`: A library for creating and verifying JSON Web Tokens (JWT).
- `mongoose`: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- `morgan`: HTTP request logger middleware for Node.js.
- `dotenv`:  Loads environment variables from a .env file.
- `fs`: File system module for Node.js.
- `nodemon`: A tool for automatically restarting the Node.js application when file changes are detected.

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
