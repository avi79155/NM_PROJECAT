const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const themeToggle = document.getElementById("themeToggle");

// Load theme
if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.add("light");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
  localStorage.setItem("theme",
    document.documentElement.classList.contains("light") ? "light" : "dark"
  );
});

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Add task
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ text, done: false });
  taskInput.value = "";
  saveAndRender();
});

// Toggle & delete task
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    tasks.splice(e.target.dataset.index, 1);
  } else if (e.target.classList.contains("toggle")) {
    tasks[e.target.dataset.index].done = !tasks[e.target.dataset.index].done;
  }
  saveAndRender();
});

// Save + render
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="toggle" data-index="${index}">✔</button>
        <button class="delete" data-index="${index}">🗑</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}
