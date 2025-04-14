const form = document.getElementById("todo-form");
const titleInput = document.getElementById("todo-input__title");
const descriptionInput = document.getElementById("todo-input__description");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const description = descriptionInput.value;

    if (!title || !description) return;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");

    const taskTitle = document.createElement("h3");
    taskTitle.innerText = title;
    const taskDescription = document.createElement("p");
    taskDescription.innerText = description;
    newTask.appendChild(taskTitle);
    newTask.appendChild(taskDescription);

    newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
    });

    newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
    });

    todoLane.appendChild(newTask);

    titleInput.value = "";
    descriptionInput.value = "";
});