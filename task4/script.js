<!-- Task 4 code to be added -- >
  document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    const taskText = document.getElementById("taskInput").value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}
