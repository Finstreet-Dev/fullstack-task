
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

## Additional Frontend Task: React Hero Section with Animated Cards

### Overview
This task involves creating a hero section with three animated cards in React, based on a provided prototype. The goal is to replicate the design and animations as closely as possible.

### Prototype Reference
- Prototype Link: [Bugatti Cars Prototype](https://www.figma.com/proto/dCpIoeMGgjSVW0cLJwRfQc/Bugatti-Cars?page-id=0%3A1&type=design&node-id=28-221&viewport=190%2C283%2C0.08&t=2sU0hUqodTgPkH5q-1&scaling=scale-down&starting-point-node-id=28%3A221&mode=design)
- Instructions: Press “Space” to start the “Prototype”, “Next” to switch between the slides, and the “Menu Icon” on the top left to check the menu. Press “R” to restart.

### Task Requirements
- **React Implementation**: Develop the hero section using React.
- **Animation**: Implement animations for the cards as shown in the prototype.
- **Menu Interaction**: Add functionality for the menu opening and closing with hover animation on the page names.
- **Replicate Design**: Try to match the design in the prototype as closely as possible, including layout, colors, and fonts.

### Evaluation Criteria
- **Fidelity to Prototype**: The final implementation should closely resemble the prototype in design and animation.
- **Code Quality**: The code should be clean, well-organized, and properly commented.
- **Interactivity**: The animations and interactions should be smooth and user-friendly.
- **React Best Practices**: Use of React best practices for state management and component structure.

### Submission Guidelines
- Provide the source code via a GitHub repository alongside the backend task.
- Include a separate README or section in the existing README with instructions on how to set up and run the React application.
- Document any third-party libraries used for animations or UI components.
