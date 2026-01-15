# Blueprint: Modular Learning Platform

## 1. Overview

This document outlines the system architecture for a modular, microservice-ready learning platform. The platform will provide functionalities for user authentication, course management, assessments, analytics, and messaging.

## 2. System Architecture

The application will be built using a microservices architecture. Each core functionality will be encapsulated within its own service, allowing for independent development, deployment, and scaling. The services will communicate with each other through a well-defined API, likely a RESTful API.

This modular approach offers several advantages:
- **Scalability**: Each service can be scaled independently based on demand.
- **Flexibility**: Different services can be written in different languages or use different technologies if needed.
- **Resilience**: The failure of one service will not bring down the entire application.
- **Maintainability**: Smaller, focused services are easier to understand and maintain.

## 3. Core Services

### 3.1. Authentication Service

*   **Purpose**: Manages user identity and access control.
*   **Responsibilities**:
    *   User registration and login (email/password, OAuth).
    *   JWT-based session management.
    *   Role-based access control (RBAC).
    *   User profile management.
*   **Technology**: Node.js with NestJS for a structured and scalable implementation.

### 3.2. Course Management Service

*   **Purpose**: Handles the creation, organization, and delivery of educational content.
*   **Responsibilities**:
    *   Creating and managing courses, modules, and lessons.
    *   Uploading and storing course materials (videos, documents, etc.) using Supabase Storage.
    *   Tracking user progress through courses.
*   **Technology**: Node.js with Express for a lightweight and flexible implementation.

### 3.3. Assessment Service

*   **Purpose**: Manages quizzes, assignments, and other forms of assessment.
*   **Responsibilities**:
    *   Creating and managing assessments with various question types.
    *   Submitting and grading assessments.
    *   Providing feedback to users.
*   **Technology**: Node.js with NestJS to handle the complex logic of assessments and grading.

### 3.4. Analytics Service

*   **Purpose**: Gathers and analyzes data on user engagement and learning outcomes.
*   **Responsibilities**:
    *   Tracking user activity across the platform.
    *   Generating reports and visualizations on course effectiveness and user performance.
    *   Providing insights to instructors and administrators.
*   **Technology**: Node.js with Express. It will likely consume events from other services.

### 3.5. Messaging Service

*   **Purpose**: Facilitates communication between users.
*   **Responsibilities**:
    *   Real-time chat between instructors and students.
    *   Discussion forums for courses.
    *   Notifications and announcements.
*   **Technology**: Node.js with Express and WebSockets (or a library like Socket.io) for real-time communication.

## 4. Technology Stack

*   **Backend**:
    *   **Frameworks**: A mix of Node.js with NestJS (for more complex services like Authentication and Assessments) and Express (for lighter services like Course Management and Analytics). This allows us to use the right tool for the job.
    *   **Language**: TypeScript for type safety and improved developer experience.
*   **Database**:
    *   **Primary**: Supabase (PostgreSQL) will be used as the main database for all services.
    *   **Caching**: Redis will be used for caching frequently accessed data to improve performance.
*   **Storage**: Supabase Storage will be used for storing user-uploaded files, such as course materials and assignment submissions.
*   **Frontend**: React (as per the project's initial setup).
*   **Deployment**: The microservices will be containerized using Docker and can be deployed to a cloud provider like Google Cloud Run or AWS Fargate.

## 5. Next Steps (Current Request)

This document serves as the foundational architectural plan. The next steps will involve implementing the user interface for these features.

*   **Plan**:
    1.  Install necessary dependencies for routing and a component library.
    2.  Create a basic layout with a navigation bar.
    3.  Implement placeholder pages for each of the core services.
    4.  Style the application for a modern and visually appealing look.

## 6. Phase 2: User & Access Management

### 6.1. Authentication & Identity

This phase focuses on building a robust authentication system and defining user roles and permissions.

*   **Implementation Plan**:
    1.  **Email/Password Login**:
        *   Create a sign-up form to register new users with their email and a hashed password.
        *   Create a login form to authenticate users.
        *   Implement session management using JWTs.
    2.  **OAuth Integration**:
        *   Integrate with Google and Microsoft for third-party authentication.
        *   Handle user profile creation from OAuth data.
    3.  **Role System**:
        *   Define three user roles: `Admin`, `Lecturer`, and `Student`.
        *   Create a permission matrix that maps each role to specific actions they can perform within the application.
    4.  **UI Implementation**:
        *   Update the `Auth.tsx` page to include login and sign-up forms.
        *   Add buttons for OAuth providers.
        *   Create a user context to manage the authenticated user's state across the application.
        *   Implement protected routes to restrict access based on user roles and permissions.

### 6.2. Permission Matrix

| Permission                        | Admin | Lecturer | Student |
| --------------------------------- | :---: | :------: | :-----: |
| **Course Management**             |       |          |         |
| Create/Edit/Delete Courses        |   ✅   |    ✅     |   ❌    |
| Enroll/Unenroll Users             |   ✅   |    ✅     |   ❌    |
| View All Courses                  |   ✅   |    ✅     |   ✅    |
| Access Enrolled Courses           |   ✅   |    ✅     |   ✅    |
| **Assessments**                   |       |          |         |
| Create/Edit/Delete Quizzes        |   ✅   |    ✅     |   ❌    |
| View/Grade Submissions            |   ✅   |    ✅     |   ❌    |
| Take Quizzes                      |   ❌   |    ❌     |   ✅    |
| View Own Grades                   |   ✅   |    ✅     |   ✅    |
| **User Management**               |       |          |         |
| Create/Edit/Delete Users          |   ✅   |    ❌     |   ❌    |
| Assign Roles                      |   ✅   |    ❌     |   ❌    |
| **Analytics**                     |       |          |         |
| View Platform-Wide Analytics      |   ✅   |    ❌     |   ❌    |
| View Course-Specific Analytics    |   ✅   |    ✅     |   ❌    |
| **Messaging**                     |       |          |         |
| Send Platform-Wide Announcements  |   ✅   |    ❌     |   ❌    |
| Send Course-Specific Messages     |   ✅   |    ✅     |   ✅    |
