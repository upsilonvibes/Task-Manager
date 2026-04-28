# Gestor de Tareas (Task Manager)

A functional, responsive Task Manager built with vanilla web technologies. This project focuses on **State Management**, **DOM Manipulation**, and **Data Persistence** using the browser's LocalStorage.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Persistence**: Tasks are saved to `localStorage`, so they remain even after refreshing the page.
- **Task Filtering**: View "All" tasks, only "Pending" tasks, or only "Completed" tasks.
- **Bulk Actions**: A "Clear Completed" button to quickly remove finished items.
- **Responsive Design**: Styled with a custom sea-foam green palette (`#78e6c1`) and optimized for various screen sizes.

## 🛠️ Built With

- **HTML5**: Semantic structure for accessibility.
- **CSS3**: Custom properties (variables) and Flexbox layout.
- **JavaScript (ES6)**: Logic for state management, event listeners, and array filtering.

## 📁 Project Structure

```text
/task-manager
  ├── index.html       # Application structure
  ├── styles.css       # Visual styling and layout
  ├── script.js        # Core logic and storage management
  └── README.md        # Project documentation
  ```
## 🧠 JavaScript Concepts Applied
**State Management**
The app uses an array of objects to track the "state" of your tasks. When you check a box or delete an item, the array updates first, and then the screen "re-renders" to match the data.

**LocalStorage**
To prevent data loss on refresh, the script uses:

JSON.stringify(): To turn the task list into a string for saving.

JSON.parse(): To turn that string back into a list when the page loads.

**Array Filtering**
The "Clear Completed" button uses the .filter() method to create a new list containing only the tasks that aren't finished yet.

## 📖 How to Use
1. Clone the repository:


bash
git clone [https://github.com/percysmartanecdote168-droid/Task-Manager.git](https://github.com/percysmartanecdote168-droid/Task-Manager.git)

2. Open index.html in any modern web browser.

3. Add your daily goals and stay organized!

## 📜 Philosophy
"Paso a paso se llega lejos." (Step by step, one goes far.)

© April 2026 | Developed by percysmartanecdote168-droid


