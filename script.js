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

  const taskList = document.getElementById("taskList");

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = `${task} (Priority: ${priority})`;

  li.classList.add("task", importance);

  // Append to the list
  taskList.appendChild(li);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => li.remove(); // Remove list item
  li.appendChild(deleteBtn);
}
