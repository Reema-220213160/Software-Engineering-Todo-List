// === الطالبة 8: إعداد عناصر الواجهة الأساسية للاستدعاء ===
const inputTask = document.getElementById("input-task");
const tasklist = document.getElementById("task-list");
const btn = document.querySelector(".btn");

// === الطالبة 8: منطق دالة إضافة مهمة جديدة ===
function addTask() {
    // التحقق من أن حقل الإدخال ليس فارغاً
    if (!inputTask.value) { 
        alert("You must add a value"); 
    } else {
        // إنشاء عنصر قائمة جديد ومقيد بزر الحذف المخصص (span)
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        
        let span = document.createElement("span");
        span.innerHTML = "&times;"; // علامة الضرب للحذف
        
        li.appendChild(span);
        tasklist.appendChild(li);
    }
    
    // تفريغ الحقل بعد الانتهاء
    inputTask.value = "";
    setTask();
}

btn.addEventListener("click", addTask);

tasklist.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {

        // Toggle task completion state
        e.target.classList.toggle("checked");

        setTask();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        setTask();
    }
}

// الطالبة 8: ربط الدالة بحدث النقر على زر الإضافة
btn.addEventListener("click", addTask);
