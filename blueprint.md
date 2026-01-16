# Project Blueprint

## Overview

This document outlines the plan for creating a new feature-rich Learning Management System (LMS). The application will be built using React and will include features for user authentication, course management, assessments, analytics, and messaging. The application will be styled using Material-UI and will follow a modern, clean design.

## Phase 1: Basic UI and Routing (✅ Completed)

*   **Objective**: Set up the basic UI and routing for the application.
*   **Key Features**:
    *   **Navbar**: A responsive navigation bar with links to all the main pages.
    *   **Pages**: Create the following pages with basic placeholder content:
        *   Home
        *   Courses
        *   Course Builder
        *   Assessments
        *   Analytics
        *   Messaging
        *   Login/Authentication
    *   **Routing**: Implement routing using `react-router-dom` to navigate between the pages.

## Phase 2: User Authentication and Access Management (✅ Completed)

*   **Objective**: Implement user authentication and role-based access control.
*   **Key Features**:
    *   **Authentication**: Allow users to sign up and log in using email/password, Google, and Microsoft accounts.
    *   **Roles**: Define three user roles: `Admin`, `Lecturer`, and `Student`.
    *   **Access Control**: Implement the following access control rules:
        *   **Analytics**: Only `Admin` users can access the analytics page.
        *   **Course Management**: Only `Admin` and `Lecturer` users can create and edit courses.
        *   **Student View**: `Student` users can only view courses.

## Phase 3: Course Management (✅ Completed)

*   **Objective**: Implement the course management features.
*   **Key Features**:
    *   **Course Creation**: Allow `Admin` and `Lecturer` users to create new courses.
    *   **Course Content**: Add support for adding different types of content to courses, such as text, images, videos, and quizzes.
    *   **Course Publishing**: Allow `Admin` and `Lecturer` users to publish courses, making them available to `Student` users.

## Phase 4: Advanced Course Structure and Content Editor (Current)

*   **Objective**: Implement a hierarchical course structure and a rich text editor.
*   **Key Features**:
    *   **Hierarchical Course Structure**:
        *   **Course → Sections → Subsections → Activities**: Create a nested structure for organizing course content.
        *   **Drag-and-Drop Ordering**: Allow lecturers and admins to easily reorder sections, subsections, and activities.
        *   **Collapsible Navigation Tree**: Provide a clear and organized view of the course structure.
        *   **Visibility Controls**: Enable lecturers and admins to control the visibility of each section.
    *   **Rich Text Editor**:
        *   **Integration**: Integrate the `tiptap` rich text editor.
        *   **Content Types**: Support HTML, image, and video embedding, as well as audio and screen recording.
        *   **Version History**: Track changes to content and allow for rollbacks.
        *   **Accessibility Checker**: Integrate a WCAG accessibility checker to ensure content is accessible to all users.

## Phase 5: Assessments and Quizzes

*   **Objective**: Implement the assessment and quiz features.
*   **Key Features**:
    *   **Quiz Creation**: Allow `Admin` and `Lecturer` users to create quizzes with different question types (e.g., multiple-choice, true/false, short answer).
    *   **Quiz Taking**: Allow `Student` users to take quizzes and view their results.
    *   **Grading**: Automatically grade quizzes and provide feedback to `Student` users.

## Phase 6: Analytics and Reporting

*   **Objective**: Implement the analytics and reporting features.
*   **Key Features**:
    *   **Course Analytics**: Provide `Admin` users with analytics on course enrollment, completion rates, and student performance.
    *   **Student Analytics**: Provide `Admin` and `Lecturer` users with analytics on individual student progress and performance.

## Phase 7: Messaging and Communication

*   **Objective**: Implement the messaging and communication features.
*   **Key Features**:
    *   **Announcements**: Allow `Admin` and `Lecturer` users to post announcements to all users or specific courses.
    *   **Direct Messaging**: Allow users to send direct messages to each other.
