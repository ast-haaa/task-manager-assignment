# TaskFlow

A modern full-stack Task Management Application built using Spring Boot, Spring Security, JWT Authentication, React, and MySQL.

The application provides secure user authentication and task management capabilities through a clean and responsive user interface backed by RESTful APIs.

---

## Features

### Authentication
- User Registration
- User Login
- JWT Token Generation
- Secure Authentication Flow

### Task Management
- Create Tasks
- View All Tasks
- Update Existing Tasks
- Delete Tasks
- Task Status Tracking

### User Experience
- Responsive Interface
- Light / Dark Theme Support
- Clean Dashboard
- Modern UI Design

---

## Tech Stack

### Backend
- Java
- Spring Boot
- Spring Security
- JWT (JSON Web Tokens)
- Spring Data JPA
- Maven

### Frontend
- React
- Vite
- Axios
- React Router DOM

### Database
- MySQL

---

## Project Architecture

```text
taskmanager
│
├── src/                 # Spring Boot Backend
│
├── frontend/            # React Frontend
│
├── pom.xml
│
└── README.md
```

---

## REST API Endpoints

### Authentication

| Method | Endpoint |
|----------|----------|
| POST | `/api/v1/auth/register` |
| POST | `/api/v1/auth/login` |

### Tasks

| Method | Endpoint |
|----------|----------|
| GET | `/api/v1/tasks` |
| POST | `/api/v1/tasks` |
| PUT | `/api/v1/tasks/{id}` |
| DELETE | `/api/v1/tasks/{id}` |

---

## Backend Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to project:

```bash
cd taskmanager
```

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

Backend will start on:

```text
http://localhost:8080
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Frontend will start on:

```text
http://localhost:5173
```

---

## Authentication Flow

1. User registers using email and password.
2. User logs in successfully.
3. Backend generates a JWT token.
4. Token is stored on the client side.
5. Authenticated requests are authorized using the JWT token.

---

## Database

The application uses MySQL for persistent storage.

### Entities

#### User
- id
- name
- email
- password
- role

#### Task
- id
- title
- description
- status
- createdBy

---

## Assignment Highlights

- Spring Security Integration
- JWT Based Authentication
- RESTful API Design
- MySQL Database Integration
- React Frontend
- Clean Dashboard Interface
- Modular Project Structure

---

## Author

**Astha Adhikari**

