let employees = JSON.parse(localStorage.getItem("employees")) || [];
let editIndex = -1;
let count = parseInt(localStorage.getItem("count")) || 1;
let form = document.getElementById("employeeForm");
let employeeList = document.getElementById("nhanvien-list");
function displayEmployees() {
    employeeList.innerHTML = "";
    employees.forEach((nhanvien, index) => {
        let row = document.createElement("tr")
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${nhanvien.name}</td>
        <td>${nhanvien.job}</td>
        `;
        employeeList.appendChild(row);
    });
}
function saveNhanvien() {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("count", count.toString())
}
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("job").value = "";
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value
    let job = document.getElementById("job").value
    if (!name) {
        alert("Ten nhap khong hop le!")
        return;
    }
    if (!job) {
        alert("Chuc vu khong hop le!")
        return;
    }
    let newEmploy = {
        name: name,
        job: job
    };
    employees.push(newEmploy);
    alert("Them nhan vien thanh cong!")
    saveNhanvien();
    displayEmployees();
    clearForm();
});
displayEmployees();