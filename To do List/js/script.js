const inputTask = document.getElementById("input-task");
const tasklist = document.getElementById("task-list");
const btn = document.querySelector(".btn");

function addTask() {
    if (!inputTask.value) { 
        alert("You must add a value"); 
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        let span = document.createElement("span");
        span.innerHTML = "&times;";
        li.appendChild(span);
        tasklist.appendChild(li);
    }
    inputTask.value = "";
    
    if (typeof setTask === "function") {
        setTask();
    }
}

btn.addEventListener("click", addTask);
