# SocialPanda 🐼

Welcome to SocialPanda, a social networking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). SocialPanda allows users to sign up, create posts, like and comment on posts, and manage their profiles.

## Features

- **User Authentication:** Sign up and sign in using Clerk for authentication.
- **User Profiles:** Manage user profiles with custom metadata.
- **Post Management:** Create, update, and delete posts.
- **Like and Comment:** Like and comment on posts with real-time updates.
- **Responsive Design:** Built with a mobile-first approach for an optimal user experience.

## Technologies Used

- **MongoDB:** NoSQL database for storing user and post data.
- **Express.js:** Backend framework for handling API requests and routing.
- **React.js:** Frontend library for building dynamic user interfaces.
- **Node.js:** Server environment for running the application.
- **Clerk:** Authentication service for user sign-up and sign-in.
- **Next.js:** Framework for server-rendered React applications.

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- MongoDB (local instance or MongoDB Atlas)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/socialpanda.git
    cd socialpanda
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    # Install frontend dependencies
    cd frontend-app
    npm install
    # or
    yarn install

    # Install backend dependencies
    cd ../backend-server
    npm install
    # or
    yarn install
    ```

3. Configure environment variables:

    - Create a `.env.local` file in the `frontend-app` directory and add your Clerk API keys:
    
      ```plaintext
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
      CLERK_SECRET_KEY=your-clerk-secret-key

      NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
      NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
      ```

    - Create a `.env` file in the `backend-server` directory with your MongoDB URI:

      ```plaintext
      MONGODB_URL=your-mongodb-connection-uri
      ```

4. Start the development server:

    ```bash
    # Start the backend server
    cd ../backend-server
    npm run dev
    # or
    yarn dev

    # Start the frontend server
    cd ../frontend-app
    npm run dev
    # or
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## Learn More

- [Clerk Documentation](https://clerk.dev/docs) - Learn how to integrate Clerk for user authentication.
- [MERN Stack Tutorial](https://www.mongodb.com/mern-stack) - Comprehensive guide to the MERN stack.

Feel free to explore the code, contribute, and provide feedback!

## Status

Currently a work in progress. Continuous improvements and updates are underway.

