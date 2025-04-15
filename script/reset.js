const resetButton = document.getElementById("reset-tasks");

resetButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset the tasks? This will remove all tasks from the board.")) {
        const tasks = document.querySelectorAll(".task");
        tasks.forEach((task) => {
            task.remove();
        });
        const swimLanes = document.querySelectorAll(".swim-lanes");
        swimLanes.forEach((lane) => {
            lane.classList.remove("is-dragging");
        });
    } else {
        alert("Tasks were not removed.");
    }
});