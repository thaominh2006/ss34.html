let todos = JSON.parse(localStorage.getItem("todos") || '[]');
let form = document.getElementById("form-todo");
let todoList = document.getElementById("todo-List");
function displayTodo() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
         ${todo.content}
        <button class="delete-btn" onclick="deleteTask(${index})">Xoa</button>
        `;
        todoList.appendChild(li);
    });
}
function saveTask() {
    localStorage.setItem("todos", JSON.stringify(todos))
}
function clearTask(){
    document.getElementById("text").value = "";
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let content = document.getElementById("text").value;
    if (!content) {
        alert("Vui long nhap lai noi dung cong viec")
        return;
    }
    let newTodo = {
        content: content
    };
    todos.push(newTodo);
    alert("Cong viec duoc them thanh cong!")
    saveTask();
    displayTodo();
    clearTask()
});
function deleteTask(index) {
    todos.splice(index, 1);
    saveTask();
    displayTodo();
    alert("Xoa cong viec thanh cong!")
}
displayTodo();