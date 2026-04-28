// 1. Storage: Get tasks from the browser's memory or start with an empty list
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

// 2. Grabbing the HTML elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const filterBtns = document.querySelectorAll('.filter-btn');

// 3. The "Render" function (The Painter)
// This function draws the list on the screen.
function renderTasks(filter = 'all') {
    taskList.innerHTML = ''; // Clear the list first
    
    tasks.forEach((task, index) => {
        // Filter logic: skip tasks that don't match the selection
        if (filter === 'active' && task.completed) return;
        if (filter === 'completed' && !task.completed) return;

        const li = document.createElement('li');
        
        // We add a checkbox and the task text inside the <li>
        li.innerHTML = `
            <div class="task-item">
                <input type="checkbox" ${task.completed ? 'checked' : ''} 
                       onclick="toggleTask(${index})">
                <span class="${task.completed ? 'completed-text' : ''}">
                    ${task.text}
                </span>
            </div>
            <button onclick="deleteTask(${index})" class="delete-btn">✕</button>
        `;
        taskList.appendChild(li);
    });
    
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

// 4. Action Functions
function addTask() {
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push({ text: text, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

window.toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

// Function to remove all tasks that are marked as completed
const clearBtn = document.getElementById('clearCompleted');

clearBtn.addEventListener('click', () => {
    // We overwrite the tasks array with only the ones where completed is false
    tasks = tasks.filter(task => !task.completed);
    
    // Refresh the screen
    renderTasks();
});

window.deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

// 5. Making the Filter Buttons work
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all and add to the clicked one
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        
        // Redraw the list based on the filter (all, active, or completed)
        renderTasks(btn.getAttribute('data-filter'));
    });
});

// 6. Triggers
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Initial load
renderTasks();