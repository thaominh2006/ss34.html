let accounts = JSON.parse(localStorage.getItem("account") || '[]')
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if (email.length === 0) {
        alert("Email khong duoc rong!");
        return;
    }
    if (password.length === 0) {
        alert("Mat khau khong duoc de trong!")
        return;
    }
    let existAccount = accounts.find(acc => acc.email === email && acc.password === password);
    if (!existAccount) {
        alert("Email hoac Mat khau khong dung!");
    } else {
        alert("Dang nhap thanh cong!")
        window.location.href = "https://www.facebook.com"
    }
});
function saveAccount(acc) {
    return localStorage.setItem("account", JSON.stringify(acc));
}