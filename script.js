// Initialize the tasks array
const tasks = [];

// Load tasks from localStorage when the page loads
function loadFromLocalStorage() {
    const allTasks = JSON.parse(localStorage.getItem("allTasks"));

    if (allTasks) {
        tasks.push(...allTasks);
    }

    loadTasks();
}
loadFromLocalStorage();

// Load and display tasks in the tasks container
function loadTasks() {
    localStorage.setItem("allTasks", JSON.stringify(tasks));

    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";

    for (const task of tasks) {
        tasksContainer.innerHTML += `
      <div class="task-item">
        <span class="task-text">${task}</span>
        <button class="btn-delete" type="button" onclick="deleteTask('${task}')">
          Delete
        </button>
      </div>
      `;
    }
}

// Delete a task by its value
function deleteTask(task) {
    const taskIndex = tasks.indexOf(task);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
    }

    loadTasks();
}

// Add a new task
function addTask() {
    const taskInputElement = document.getElementById("task-input");
    const task = taskInputElement.value.trim();

    if (!task) {
        alert("Please enter a task");
        return;
    }

    tasks.unshift(task);
    loadTasks();

    taskInputElement.value = "";
}
