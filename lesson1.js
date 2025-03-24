let accounts = [];
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmpass").value;

    let existAccount = accounts.find(acc => acc.email === email);
    let account = JSON.parse(getAccount() || '[]');

    if (existAccount) {
        alert("Email da ton tai!")
    } else {
        if (email.length === 0) {
            alert("Email khong duoc rong!")
        } else if (password === "") {
            alert("Mat khau khong duoc de trong!")
        } else if (confirmPass !== password) {
            alert("Mat khau nhap lai khong hop le")
        } else {
            alert("Dang ki thanh cong!")
            let newAccount = {
                email: email,
                password: password,
            };
            accounts.push(newAccount);
            saveAccount(accounts);

        }
    }
});
function getAccount() {
    return localStorage.getItem("account")
}
function saveAccount(acc) {
    return localStorage.setItem("account", JSON.stringify(acc));
}

