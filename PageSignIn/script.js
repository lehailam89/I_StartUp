let apiUser = "http://localhost:3000/user";

function login() {
    getUser(handleLogin);
}

function getUser(callback) {
    fetch(apiUser)
        .then(function(res) {
            return res.json();
        })
        .then(callback)
        .catch(function(error) {
            console.error('Lỗi khi lấy dữ liệu người dùng:', error);
        });
}

function handleLogin(data) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let loggedIn = false;

    data.forEach((userData) => {
        if (userData.username === username && userData.password === password) {
            loggedIn = true;
        }
    });

    if (loggedIn) {
        alert("Đăng nhập thành công");
        window.location.href = "http://127.0.0.1:5500/PageHome/index.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác");
    }
}

var signUpClick = document.getElementById("signup-click");

signUpClick.addEventListener("click", function() {
    window.open("http://127.0.0.1:5500/PageSignUp/index.html", "_self");
});