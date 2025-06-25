const tasks = []; // index starting from 0

// ' abc  '.trim() -> 'abd'
//  string, numner ,boolean, undefined, null, array, object
function addTask() {
  console.log("add task");
  const taskInput = document.getElementById("taskInput");
  const priorityInput = document.getElementById("priorityInput");

  const task = taskInput.value.trim();
  //  For input, select, textarea, their values are sting,
  // use parseInt, parseFloat to tranform into number
  const priority = parseInt(priorityInput.value);

  // print out for debug
  //   console.log("task", task);
  //   console.log("priority", priority);

  if (!task) {
    alert("Please enter a task.");
    return;
  }
  let importance = "";
  if (priority <= 2) {
    importance = "high";
  } else if (priority == 3) {
    importance = "medium";
  } else {
    importance = "low";
  }
  const newTask = {
    task: task,
    priority: priority,
    importance: importance,
  };
  //   append tasks array
  tasks.push(newTask);
  console.log("tasks", tasks);
  //  clean text input block
  taskInput.value = "";
  renderTask();
}
function renderTask() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // ✅ Clear existing tasks
  for (let i = 0; i < tasks.length; i++) {
    const item = tasks[i];
    // Create a new list item
    const li = document.createElement("li");
    li.className = "task " + item.importance; // li.classList.add("task", importance);
    li.textContent = `${item.task} (Priority: ${item.priority})`;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "✔️";
    deleteBtn.onclick = () => {
      li.classList.add("removing"); // This adds a CSS class called "removing" to the <li> (the task list item). This class should apply a visual transition (like fading or sliding out).

      setTimeout(() => {
        // Step 1: Remove from array
        tasks.splice(i, 1);

        // Step 2: Re-render the task list
        renderTask();
      }, 400); // match your CSS animation duration
    };

    li.appendChild(deleteBtn);
    // Append to the list
    taskList.appendChild(li);
  }
}
