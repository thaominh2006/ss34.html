const courses = JSON.parse(localStorage.getItem("courses")) || [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: "Pending",
        assignedTo: 'Lâm thì',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci ớt ớt',
    }

];
let editIndex = -1;
let idCounter = parseInt(localStorage.getItem("idCounter")) || (courses.length > 0 ? Math.max(...courses.map(task => task.id)) + 1 : 1);
let form = document.getElementById("taskForm");
let taskList = document.getElementById("taskList")
function displayTask() {
    taskList.innerHTML = "";
     courses.forEach((task, index) => {
        let row = document.createElement("tr")
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.content}</td>
            <td>${task.dueDate}</td>
            <td>${task.status}</td>
            <td>${task.assignedTo}</td>
            <td>
                <button onclick="editTask(${index})">Sua</button>
                <button onclick="deleteTask(${index})">Xoa</button>
            </td>
        `;
        taskList.appendChild(row)
    });
}
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let content = document.getElementById("content").value;
    let date = document.getElementById("due-to-date").value;
    let status = document.getElementById("status").value;
    let name = document.getElementById("name").value;
    if(!content || !date || !status || !name){
        alert("Vui long nhap dung dinh dang")
        return;
    }
    let task = {
        id: editIndex === -1 ? idCounter++ : courses[editIndex].id,
        content: content,
        dueDate: date,
        status: status,
        assignedTo: name
    };
    if (editIndex === -1) {
        courses.push(task);
        alert("Them cong viec thanh cong!")
    }else{
        courses[editIndex] = task
        editIndex = -1;
        alert("Cong viec duoc sua thanh cong!")
    }
    saveTask();
    displayTask();
    clearCourse()
})
function clearCourse(){
    document.getElementById("content").value = "";
    document.getElementById("due-to-date").value = "";
    document.getElementById("name").value = "";
}
function saveTask(){
    localStorage.setItem("courses", JSON.stringify(courses))
    localStorage.setItem("idCounter", idCounter.toString());
}
function editTask(index){
    editIndex = index;
    let task = courses[index]
    document.getElementById("content").value = task.content
    document.getElementById("due-to-date").value = task.dueDate
    document.getElementById("status").value = task.status
    document.getElementById("name").value = task.assignedTo
}
function deleteTask(index){
    courses.splice(index, 1);
    saveTask();
    displayTask();
    alert("Xoa cong viec thanh cong!")
}
displayTask();