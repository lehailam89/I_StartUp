// Định nghĩa hàm mở trang AI và che icon
function openBardAI() {
    // Tạo overlay và hiển thị
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";

    // Tạo iframe để hiển thị trang AI
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.bing.com/chat?q=Bing+AI&FORM=hpcodx"; // Đặt đường dẫn trang Bard AI
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    overlay.appendChild(iframe);
}
// Lắng nghe sự kiện click vào icon để mở trang AI
document.getElementById("openBardAIIcon").addEventListener("click", function () {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block"; // Hiển thị overlay
    var iframe = document.getElementById("bardAIframe");
    iframe.src = "https://www.bing.com/chat?q=Bing+AI&FORM=hpcodx"; // Thiết lập src của iframe
});
// Lắng nghe sự kiện click vào nút đóng để đóng trang AI
document.getElementById("closeBardAI").addEventListener("click", function () {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none"; // Ẩn overlay
    var iframe = document.getElementById("bardAIframe");
    iframe.src = ""; // Dừng tải trang
});
// Lắng nghe sự kiện click vào icon
document.getElementById("openBardAIIcon").addEventListener("click", openBardAI);

// Lắng nghe sự kiện click vào icon để mở trang AI
document.getElementById("openBardAIIcon").addEventListener("click", function () {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block"; // Hiển thị overlay
    var iframe = document.getElementById("bardAIframe");
    iframe.src = "https://www.bing.com/chat?q=Bing+AI&FORM=hpcodx"; // Thiết lập src của iframe

    // Tạo button đóng (dấu X)
    var closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.innerHTML = "X";
    overlay.appendChild(closeButton);

    // Lắng nghe sự kiện click vào nút đóng để đóng trang AI
    closeButton.addEventListener("click", function () {
        overlay.style.display = "none"; // Ẩn overlay
        iframe.src = ""; // Dừng tải trang
        overlay.removeChild(closeButton); // Xóa button đóng
    });
});



//cuộn Header
window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var distanceFromTop = header.offsetTop; // Lấy khoảng cách của header từ đỉnh của trang
    if (window.pageYOffset > distanceFromTop) { // Nếu cuộn trang xuống hơn khoảng cách từ đỉnh của header
        header.classList.add('sticky'); // Thêm class 'sticky' để cố định header
    } else {
        header.classList.remove('sticky'); // Loại bỏ class 'sticky' để header không cố định
    }
});
//end cuộn header

//bấm bắt đầu sang đăng nhập ở header
// Lấy thẻ a theo id
var startLink = document.getElementById('startLink');

// Thêm sự kiện click cho thẻ a
startLink.addEventListener('click', function (event) {
    // Ngăn chặn hành vi mặc định của thẻ a
    event.preventDefault();
    // Chuyển hướng trang web khi thẻ a được nhấp vào
    window.open("http://127.0.0.1:5500/PageSignIn/index.html", "_blank");
});
//end bấm bắt đầu


var clickPagePlace = document.querySelector('.click-pagePlace');
clickPagePlace.addEventListener('click', function () {
    window.open("http://127.0.0.1:5500/PagePlace/index.html");
});