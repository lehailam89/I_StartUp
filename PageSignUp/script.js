let apiUser = "http://localhost:3000/user";

// Lấy thẻ a theo id
var signInClick = document.getElementById('signin-click');

// Thêm sự kiện click cho thẻ a
signInClick.addEventListener('click', function(event) {
        // Ngăn chặn hành vi mặc định của thẻ a
    event.preventDefault();
    // Chuyển hướng trang web khi thẻ a được nhấp vào
    window.location.replace ("http://127.0.0.1:5500/PageSignIn/index.html");
});

// Lấy thẻ button theo id
var signupButton = document.querySelector('.button-signup');

// Thêm sự kiện click cho nút đăng ký
signupButton.addEventListener('click', function(event) {
    // Ngăn chặn hành vi mặc định của biểu mẫu
    event.preventDefault();
    // Xử lý đăng ký người dùng
    handleSignupForm();
});

function createUser(data){
    fetch(apiUser, {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(function(res){
        return res.json();
    }).then(function(data) {
        console.log(data); // Xử lý dữ liệu trả về nếu cần
    }).catch(function(error) {
        console.error('Lỗi:', error);
    });
}

function handleSignupForm(){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let password2 = document.getElementById("password-repeat");
    // Kiểm tra xác nhận mật khẩu
    if (password.value !== password2.value) {
        alert("Mật khẩu không khớp!");
        return;
    }
    else{
        alert("Đăng kí tài khoản thành công!!");
    }
    let user = {
        username : username.value,
        password : password.value,
    };
    // Gọi hàm tạo người dùng
    createUser(user);
}