


JWT Authentication with In-Memory Database and Zod Validation
This project demonstrates how to implement user authentication using JSON Web Tokens (JWT), an in-memory database, and Zod schema validation in a Node.js application. This provides a secure and efficient way to authenticate users and manage sessions.

Features
User authentication using JWT
In-memory database for storing user credentials
Zod schema validation for ensuring data integrity
Simple and easy-to-understand codebase
Installation
Clone this repository:
bash
Copy code
git clone https://github.com/your-username/your-repository.git
Navigate to the project directory:
bash
Copy code
cd your-repository
Install dependencies:
bash
Copy code
npm install
Usage
Define user credentials in the users object within the app.js file:
javascript
Copy code
const users = {
    "username1": "password1",
    "username2": "password2",
    // Add more users as needed
};
Start the application:
bash
Copy code
npm start
Use endpoints to authenticate users and generate JWTs:
POST /login: Authenticate users and generate JWTs based on username and password.
Example request body:
json
Copy code
{
  "username": "username1",
  "password": "password1"
}
Access protected routes by including the JWT in the request headers:
Example:
bash
Copy code
curl -X GET http://localhost:3000/protected-route -H "Authorization: Bearer YOUR_JWT_TOKEN"
Dependencies
jsonwebtoken: For generating and verifying JWTs.
zod: For schema validation.
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

