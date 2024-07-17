# Real-Time Price Tracker

This project is a real-time price tracker application that fetches and displays cryptocurrency prices from an API. It consists of a backend built with Node.js, Express and TypeScript, and a frontend built with Next.js and Redux.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (version >= 16.0.0)
- npm (Node Package Manager)
- MongoDB (running locally or accessible via a remote URL)
- Git (optional, for cloning the repository)

## Getting Started

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone git@github.com:khajatakreemulla/real-time-stock-price-traker.git
    ```
2. **Install backend dependencies:**
    
    ```bash
    npm install
    ```
3. **Configure MongoDB URL (if necessary):**

    Update the MongoDB connection URL in backend/src/config.ts.
4. Run the backend server in development mode:
    ```bash
    npm run dev
    ```
    The server will start running at http://localhost:3001.

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```
2. **Install frontend dependencies:**

    ```bash
    npm install
    ```
3. Run the frontend development server:

    ```bash
    npm run dev
    ```
    The frontend development server will start at http://localhost:3000.

4. **Accessing the application:**

    Open your web browser and go to http://localhost:3000 to view the Real-Time Price Tracker application.


