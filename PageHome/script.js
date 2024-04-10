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

// Scroll web
window.addEventListener('scroll', function() {
    var sectionTwo = document.querySelector('.section-two');
    var icon = document.querySelector('.fa-solid.fa-star-of-life');
    var text = document.querySelector('.section-two--content'); // Assuming the text "TRAVIE" is in an element with class "section-two--content"
    var sectionTwoPosition = sectionTwo.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(sectionTwoPosition < screenPosition && sectionTwoPosition > 0) {
        var scaleValue = sectionTwoPosition / screenPosition; // Scale down based on scroll position
        var newWidth = Math.max(300, 300 + (scaleValue * (sectionTwo.offsetWidth - 300))); // Minimum width is 300px
        var newHeight = Math.max(100, 100 + (scaleValue * (sectionTwo.offsetHeight - 100))); // Minimum height is 100px

        sectionTwo.style.width = newWidth + 'px';
        sectionTwo.style.height = newHeight + 'px';
        sectionTwo.style.transform = 'scale(' + scaleValue + ')';
        sectionTwo.style.borderRadius = '20px';

        // Scale icon and text
        var scaleFactor = 1 - (1 - scaleValue) * 0.9; // Scale down by 90% of the scroll progress
        icon.style.fontSize = scaleFactor + 'em';
        text.style.fontSize = scaleFactor + 'em';
    } else if (sectionTwoPosition <= 0) {
        // When the section is fully in view, keep it at the minimum size
        sectionTwo.style.width = '300px';
        sectionTwo.style.height = '100px';
        sectionTwo.style.transform = 'scale(0.125)';
        icon.style.fontSize = '0.125em'; // Scale icon
        text.style.fontSize = '0.125em'; // Scale text
    } else {
        // Reset to original size and position
        sectionTwo.style.width = 'auto';
        sectionTwo.style.height = '1000px';
        sectionTwo.style.transform = 'scale(1)';
        icon.style.fontSize = '1em'; // Reset icon size
        text.style.fontSize = '1em'; // Reset text size
    }
});
// End Scroll Web
