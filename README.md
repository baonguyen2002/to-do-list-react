## Simple Todo List App Docs

## Table of Contents

1. [Introduction](#1-introduction)
2. [Project Overview](#2-project-overview)
3. [Getting Started](#3-getting-started)
4. [Code Structure](#4-code-structure)
5. [Dependencies](#5-dependencies)
6. [Deployment](#6-deployment)
7. [Usage](#7-usage)

## 1. Introduction

This is the documentation for this To Do App, a simple application designed to help users manage tasks more efficiently. This document will provide an overview of the project, its code structure, refactoring details, clean code practices, design patterns, deployment information, and usage instructions.

## 2. Project Overview

The To Do App is a web-based application developed using ReactJS Framework to help users manage tasks by providing a user-friendly interface for adding, mananging progress, and deleting tasks. The app also supports task filtering based on status (All, Incomplete, Ongoing and Completed).

## 3. Getting Started

To get started with the To Do App, follow these steps:

### Prerequisites

Make sure you have the following installed:

- A modern web browser (e.g., Chrome, Firefox, Safari)
- An internet connection (for fetching external dependencies)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/baonguyen2002/to-do-list-react.git
   ```

2. **Navigate to the project diretory and install necessary dependencies:**

   ```bash
   cd to-do-list-react
   npm install
   ```

3. **Type `npm run dev` inside project diretory:**

   This will provide you with a link to view the application.

## 4. Code Structure

The project ultizes React Framework. Key components include:

- **HTML:** HTML is used to import .jsx files, which is an integral part of React.
- **CSS:** Styles to define the appearance of the web page.
- **JavaScript:** Logic for handling user interactions, managing tasks.
- **Fonts (`Poppins`):** Imported from Google Fonts for consistent typography.

## 5. Dependencies

- **React JS:** Used for building the application, installed via `npm`.
- **React Hot Toast:** Used for displaying upon adding, deleting or editing tasks, installed via `npm`.
- **Font Awesome:** Icons library, installed via `npm`.
- **Google Fonts (Poppins):** Font used for the application, linked in the `index.css` file.

## 6. Deployment

The To Do App is deployed and accessible online. You can use the following link to access the application: [To Do App](https://splendid-taiyaki-fc7a17.netlify.app/)

## 7. Usage

1. **Adding a Task:**

   - Enter the task in the input field.
   - Press Enter or click the "+" button to add the task.

2. **Editing a Task:**

   - Click the "Edit" button on a task.
   - Modify the task details.
   - Click the "+" button to save changes.

3. **Starting a Task:**

   - Click the "Play" button on a task to change its completion status from "Incomplete" to "Ongoing".

4. **Completing a Task:**

   - Click the "Check" button on a task to change its completion status from "Ongoing" to "Completed".

5. **Deleting a Task:**

   - Click the "Trash" button on a task to delete it.

6. **Filtering Tasks:**

   - Use the "View" buttons to filter tasks by status (All, Incomplete, Ongoing, Completed).

7. **Clearing All Completed Tasks:**

   - Click the "Remove All Completed Tasks" button to clear all completed tasks.
