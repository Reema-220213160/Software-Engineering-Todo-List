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


// الطالبة 6: feature/js-add-task المهمة: برمجة دالة إضافة المهام addTask وربطها بالأزرار 
// الإمساك بعناصر الواجهة الأساسية (المدخلات، القائمة، والزر)
const inputTask = document.getElementById("input-task");
const tasklist = document.getElementById("task-list");
const btn = document.querySelector(".btn");

/**
 * دالة addTask: تقوم بقراءة النص من حقل الإدخال وإنشاء عنصر قائمة جديد (li)
 * وإضافته إلى قائمة المهام مع زر الحذف (span)
 */
function addTask() {
    let taskValue = inputTask.value.trim(); // أخذ القيمة وتفريغ الفراغات الزائدة

    // التحقق من أن المستخدم لم يترك الحقل فارغاً
    if (!taskValue) {
        alert("You must add a value");
    } else {
        // إنشاء عنصر li جديد للمهمة وعنصر span لزر الحذف
        let li = document.createElement("li");
        let span = document.createElement("span");

        // إدخال نص المهمة داخل الـ li وإضافته للقائمة الرئيسية
        li.innerHTML = taskValue;
        tasklist.appendChild(li);

        // إدخال علامة الضرب (×) داخل الـ span وإضافته كابن للـ li
        span.innerHTML = "&times;";
        li.appendChild(span);
    }
    
    // تفريغ حقل الإدخال بعد الإضافة
    inputTask.value = "";
    
    // استدعاء دالة الحفظ في الـ LocalStorage (الخاصة بطالبة 8)
    if (typeof setTask === "function") {
        setTask();
    }
}

// ربط الدالة بحدث النقر على زر الإضافة
btn.addEventListener("click", addTask);

// ربط الدالة بحدث الضغط على زر "Enter" داخل حقل الإدخال
inputTask.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});