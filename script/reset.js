const resetButton = document.getElementById("reset-tasks");

resetButton.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((task) => {
        task.remove();
    });
    const swimLanes = document.querySelectorAll(".swim-lanes");
    swimLanes.forEach((lane) => {
        lane.classList.remove("is-dragging");
    });
});