# Node.js and React Project with Docker

This project includes a Node.js backend application with Sequelize and a React frontend application. Both projects are configured to work together using Docker and Docker Compose.

## Project Structure

- `server/` - Contains the Node.js backend application.
- `client/` - Contains the React frontend application.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup

### 1. Backend Configuration (Node.js)

1. **Configure the `.env` File**

   Create a `.env` file in the root of the backend project with the following variables:
  
> DB_USER=your_username
> DB_PASSWORD=your_password
> DB_SERVER=sqlserver
> DB_NAME=your_database

2. **Build and Run Containers**
Navigate to the backend project folder:
`cd server`

Then, build and run the containers using Docker Compose:
`docker-compose build`

`docker-compose up`

This will start the backend application and the SQL Server container.

### 2. Frontend Configuration (React)
1. **Configure Environment Variables**
Create a .env file in the root of the frontend project with the following variable:

> REACT_APP_API_URL=http://localhost:PORT/api

Ensure the URL matches the backend exposed by Docker.

2. **Build and Run the React Application**
Navigate to the frontend project folder:
`cd client`

Then, build and run the React application using Docker Compose:
`docker-compose build`
`docker-compose up`

The React application will be available at http://localhost:3000.
