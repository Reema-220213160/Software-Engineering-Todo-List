const inputTask = document.getElementById("input-task");
const tasklist = document.getElementById("task-list");
const btn = document.querySelector(".btn");

function addTask() {
    let taskValue = inputTask.value;

    if (!taskValue) {
        alert("You must add a value");
    }else{
        let li = document.createElement("li");
        let span = document.createElement("span");

        li.innerHTML = taskValue;
        tasklist.appendChild(li);

        span.innerHTML = "&times;";
        li.appendChild(span);
    }
    inputTask.value = "";
    setTask();
}

btn.addEventListener("click", addTask);

tasklist.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        setTask();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        setTask();
    }
});

inputTask.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function setTask() {
    localStorage.setItem("lists", tasklist.innerHTML);
}

function loadTasks() {
    tasklist.innerHTML = localStorage.getItem("lists");
}

loadTasks();