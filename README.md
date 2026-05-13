# Gestor de Tareas (Task Manager)

A modern, functional Task Manager refactored from vanilla JS to React + Vite. This project focuses on Component-based Architecture, Hooks (useState, useEffect), and Neo-Minimalist UI design.

## 🚀 Features

 - **React State Management:** Centralized task handling using useState.

 - **Side Effects & Persistence:** Integrated useEffect to synchronize task data with localStorage for persistent sessions.

 - **Dynamic Filtering:** Seamlessly toggle between "All", "Pending", and "Completed" views using array manipulation.

 - **Neo-Minimalist UI:** Refined aesthetic with a focus on high contrast, soft shadows, and reduced visual glare.

 - **Responsive Layout:** Optimized for mobile and desktop using CSS Flexbox..

## 🛠️ Built With

 - **React 18:** Frontend library for building the user interface.

 - **Vite:** Ultra-fast frontend build tool and development server.

 - **CSS3:** Custom variables and Neo-Minimalist styling.

 - **JavaScript (ES6+):** Functional programming patterns and asynchronous logic.

## 📁 Project Structure

```text
/task-manager
  ├── public/          # Static assets
  ├── src/
  │   ├── App.jsx      # Core logic, hooks, and component structure
  │   ├── App.css      # Neo-Minimalist styles and layout
  │   ├── main.jsx     # Entry point for React mounting
  │   └── index.css    # Global resets and centering
  ├── index.html       # Single Page Application template
  └── README.md        # Project documentation
  ```
## 🧠 JavaScript Concepts Applied
**Hooks (useState & useEffect)**
Managed application state without classes. useEffect acts as the bridge between the React lifecycle and the browser's localStorage API.

**Declarative Rendering**
Instead of manual DOM manipulation (like appendChild), the UI automatically updates based on the current state of the tasks array.

**Conditional Styling**
Leveraged JavaScript template literals to dynamically apply CSS classes (like .active for filters and .completed-text for tasks).

## 📖 How to Use
1. **Clone the repository:**


bash
git clone [https://github.com/upsilon-vibes/Task-Manager.git](https://github.com/upsilonvibes/Task-Manager.git)

2. **Install dependencies:**
bash
npm install

3. **Run the development server:**
bash
npm run dev

4. **Build for production:**
bash
npm run build

## 📜 Philosophy
"Paso a paso se llega lejos." (Step by step, one goes far.)

© May 2026 | Developed by upsilonvibes


