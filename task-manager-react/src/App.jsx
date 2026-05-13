import { useState, useEffect } from 'react'
import './App.css'



function App() {
  // State Management
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all"); // To handle All, Pending, Completed

  // Persistence (Bonus Requirement)
  useEffect(() => {
    const saved = localStorage.getItem('myTasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Core Features: Add, Toggle, Delete
  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(t => !t.completed));
  };

  return (
    <div className="container">
      <header>
        <h1>Gestor de Tareas</h1>
        <p className="philosophy">"Paso a paso se llega lejos."</p>
      </header>

      <form className="input-container" onSubmit={addTask}>
        <input 
          type="text" 
          id="taskInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..." 
          maxLength="50" 
        />
        <button type="submit" id="addBtn">Add Task</button>
      </form>

      <nav className="filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        > All </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`} 
          onClick={() => setFilter('active')}
        > Pending </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`} 
          onClick={() => setFilter('completed')}
        > Completed </button>
      </nav>

      <main>
        <ul id="taskList">
          {tasks
            .filter(t => {
              if (filter === 'active') return !t.completed;
              if (filter === 'completed') return t.completed;
              return true;
            })
            .map(task => (
              <li key={task.id}>
                <div className="task-item">
                  <input 
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={() => toggleTask(task.id)} 
                  />
                  <span className={task.completed ? 'completed-text' : ''}>
                    {task.text}
                  </span>
                </div>
                <button onClick={() => deleteTask(task.id)} className="delete-btn">✕</button>
              </li>
            ))}
        </ul>
      </main>

      <footer>
        <button id="clearCompleted" onClick={clearCompleted}>Clear Completed</button>
        <p> &copy; May 2026 | Task Manager | All rights reserved </p>
      </footer>
    </div>
  );
}

export default App;