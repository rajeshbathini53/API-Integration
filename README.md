# 🚀 Full Stack API Integration & Front-End Interaction

This project demonstrates **server-client communication using RESTful APIs** with **Node.js (Express)** on the backend and a **plain HTML, CSS, and JavaScript frontend**.  
It is built as part of the **Cognifyz Full Stack Development Internship** — *Level 3: Advanced (Task 5)*.


## 📋 Project Overview

The goal of this project is to **build a complete API-driven application** that performs CRUD operations (Create, Read, Update, Delete) using RESTful principles.  
The project showcases how the frontend communicates with the backend using **AJAX (Fetch API)** calls, dynamically updating the UI with server data.

The backend acts as a lightweight API server, while the frontend serves as a user interface that consumes this API.


## 🎯 Objective

To introduce **server-client interaction through a RESTful API**, enabling dynamic data flow between the frontend and backend.

## ⚙️ Key Features

✅ **RESTful API Endpoints**
- Create, Read, Update, Delete operations on user data.  
- Data stored in a local `users.json` file (can easily be replaced with a database).

✅ **Dynamic Frontend**
- Built using plain HTML, CSS, and Vanilla JS.
- Fetches live data from API and renders it dynamically.  
- Responsive and clean layout for ease of use.

✅ **Server-Side Logic**
- Built with **Node.js** and **Express.js** framework.
- Middleware for JSON parsing, static file serving, and CORS handling.

✅ **Data Persistence**
- User data persists in `users.json` file using built-in Node `fs` module.

✅ **Scalable Structure**
- Can easily be extended to integrate MongoDB / MySQL for persistent databases.
- Backend ready for integration with frontend frameworks (React, Vue, etc.)


## 🧩 Folder Structure

📦 project-folder
├── 📄 server.js # Express server setup and API endpoints
├── 📄 users.json # Local JSON data storage (mock database)
├── 📄 package.json # Node dependencies and scripts
├── 📁 public/ # Static frontend files served by Express
│ ├── index.html # Main UI
│ ├── script.js # Frontend logic using Fetch API
│ └── style.css # Optional custom styles
├── 📄 .gitignore # Ignored files (node_modules, logs, etc.)
└── 📄 README.md # Project documentation


---

## 🛠️ Technologies Used

| Area | Technology |
|------|-------------|
| **Backend** | Node.js, Express.js |
| **Frontend** | HTML5, CSS3, JavaScript (Fetch API) |
| **Data Handling** | JSON file using Node fs module |
| **Version Control** | Git & GitHub |
| **API Type** | RESTful API |
| **Tools Used** | VS Code, Postman (for testing), Node Package Manager (npm) |

---

## 📡 API Endpoints

| Method | Endpoint | Description 

| `GET` | `/api/users` | Fetch all users 
| `POST` | `/api/users` | Add a new user 
| `PUT` | `/api/users/:id` | Update user by ID 
| `DELETE` | `/api/users/:id` | Delete user by ID 

Example Request (POST):
```json
{
  "name": "RAJESH BATHINI",
  "email": "rajeshbathini@gmail.com"
}

Example Response:

{
  "id": 1731170100319,
  "name": "RajeshBathini",
  "email": "rajeshbathini@gmail.com"
}

