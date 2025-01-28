# MERN CRUD Application

A RESTful CRUD application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Repository Link

GitHub Repository: [mern-project](https://github.com/Vilashkachare19/mern-project)

## Features

- Add new user to the database (Create)
- View user in a list (Read)
- Edit existing users (Update)
- Delete users from the database (Delete)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- React.js
- CORS
- dotenv

## Installation

```bash
# Clone the repository
git clone https://github.com/Vilashkachare19/mern-project.git

# Navigate to project directory
cd mern-project

# Install dependencies for the backend
cd server
npm install

# Install dependencies for the frontend
cd ../client
npm install
```

## Environment Setup
Create a `.env` file in the `server` directory:
```env
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
```

## Running the Application
```bash
# Start the backend server
cd server
npm run dev

# Start the frontend development server
cd ../client
npm run dev
```

## API Endpoints

### Base URL: `http://localhost:3000`
### To Login URL: 'http://localhost:3000/api/login'

| **Method** | **Endpoint**         | **Description**         |
|-----------|---------------------|--------------------------|
| GET       | `/api/getll`        | Get all users            |
| POST      | `/api/register`     | Register a new user      |
| GET       | `/api/finduser/:id` | Get user by ID           |
| PUT       | `/api/update/:id`   | Update user              |
| DELETE    | `/api/delete/:id`   | Delete user              |

## Basic entry
```json
  {
        name:{
            type:String;
        },
        email:{
            type:String;
        },
        password:{
            type:String;
        },
        age:{
            type:Number;
        };
}
```

## Example API Requests
### Create user
```Thunder client
[POST /api/createuser]: 'http://localhost:3000/api/register'
Content-Type: application/json

{
  "name": "Vilash kachare",
  "email": "vilash kachare@gmail.com",
  "password": "007",  
  "age": 20
  }
```
### Get All 
```bash
GET /api/getall
```
URL: 'http://localhost:3000/api/getall'
## Error Handling
The API returns appropriate HTTP status codes and error messages:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Server Error

## Directory Structure
```
mern-project/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── getUser/
│   │   │   │   ├── User.jsx
│   │   │   ├── City.jsx
│   │   │   ├── Countries.jsx
│   │   │   ├── Fruits.jsx
│   │   │   ├── Vegetables.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.html
│   ├── package.json
│   ├── vite.config.js
├── server/
│   ├── config.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── controllers/
│   │   ├── itemControllers.js
│   ├── models/
│   │   ├── itemModels.js
│   ├── routes/
│   │   ├── itemRoutes.js
└── README.md
```

## Author
Vilash Kachare

GitHub: [Vilashkachare19](https://github.com/Vilashkachare19)
