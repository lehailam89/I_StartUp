  //cuộn Header
    window.addEventListener('scroll', function() {
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
    startLink.addEventListener('click', function(event) {
         // Ngăn chặn hành vi mặc định của thẻ a
        event.preventDefault();
        // Chuyển hướng trang web khi thẻ a được nhấp vào
        window.open("http://127.0.0.1:5500/PageSignIn/index.html", "_blank");
    });
//end bấm bắt đầu


var clickPagePlace = document.querySelector('.click-pagePlace');
clickPagePlace.addEventListener('click', function(){
    window.open("http://127.0.0.1:5500/PagePlace/index.html");  
});