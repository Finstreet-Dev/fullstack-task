
# Task Management API - Node.js Assessment

## Overview
This is a Node.js backend assessment task where you are required to develop a RESTful API for a task management system. The API will allow users to create, read, update, and delete tasks.

## Requirements

### Task Model
- Define a task model with properties such as `title`, `description`, `dueDate`, `priority`, and `status`.

### Database Integration
- Integrate a MongoDB or SQLite database to store tasks.

### API Endpoints
- `GET /tasks`: Retrieve a list of all tasks.
- `POST /tasks`: Add a new task. Validate the input data.
- `GET /tasks/:id`: Retrieve a task by its ID.
- `PUT /tasks/:id`: Update a task by its ID.
- `DELETE /tasks/:id`: Delete a task by its ID.

### Middleware
- Implement middleware for error handling and any other necessary functionality.

### Validation
- Add validation for task input data.

### Authentication (Optional)
- Implement a simple JWT-based authentication system to protect the API endpoints.


## Evaluation Criteria
- **Functionality**: The API should meet all the specified requirements.
- **Code Quality**: The code should be clean, well-organized, and properly commented.
- **Error Handling**: The API should gracefully handle and respond to errors.
- **Data Validation**: Input data should be appropriately validated.

## Submission Guidelines
- Provide the source code via a GitHub repository.
- Include a README file with these instructions.
- Document any third-party libraries used.
