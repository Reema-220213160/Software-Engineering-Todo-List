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
    
    // استدعاء دالة الحفظ للتحديث الفوري في حال وجودها لدى الطالبة 9
    if (typeof setTask === "function") {
        setTask();
    }
}

// الطالبة 8: ربط الدالة بحدث النقر على زر الإضافة
btn.addEventListener("click", addTask);
