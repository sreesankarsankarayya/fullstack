# TODO Application

This is a full-stack TODO application built using CouchDB for the database, Flask for the backend, and React with Vite for the frontend. The application allows users to manage a list of TODO items, with a modern UI and smooth animations.

## Table of Contents

- [Architecture](#architecture)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [License](#license)

## Architecture

- **Database**: CouchDB (Dockerized)
- **Backend**: Flask (Python)
- **Frontend**: React with Vite (TypeScript)

## Setup

### Prerequisites

- Docker (for CouchDB)
- Python 3.x (for Flask)
- Node.js and npm (for React)

### 1. Setup CouchDB

Follow the instructions in the [DB README](./db/README.md) to set up CouchDB using Docker.

### 2. Setup Backend (Flask)

Follow the instructions in the [Backend README](./backend/README.md) to set up the Flask application.

### 3. Setup Frontend (React)

Follow the instructions in the [Frontend README](./frontend/README.md) to set up the React application using Vite.

## Running the Application

1. **Start CouchDB**: Make sure CouchDB is running. See [DB README](./db/README.md) for details.
2. **Start Flask Backend**: Navigate to the `backend` folder and run the Flask server.
   ```bash
   cd backend
   flask run
   ```
