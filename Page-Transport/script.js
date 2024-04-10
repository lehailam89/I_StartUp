//Click Heart
var boxTrans = document.querySelectorAll(".box-content");

boxTrans.forEach(function(box) {
    var heart = box.querySelector(".fa-heart");
    var isColor = false; // Biến flag để kiểm tra trạng thái màu sắc

    box.addEventListener("click", function() {
        if (!isColor) {
            // Nếu chưa đổi màu
            heart.style.color = "#39A7FF";
            isColor = true;
        } else {
            // Nếu đã đổi màu, đổi màu heart về màu ban đầu
            heart.style.color = ""; // Đổi về màu mặc định
            isColor = false;
        }
    });
});
// End Click Heart


//Click Next
document.addEventListener("DOMContentLoaded", function() {
    // Ẩn class 'transport-detail' ban đầu
    document.querySelector('.transport-detail').classList.add('hidden');
    // Biến để xác định xem icon trái tim của phương tiện car đã được chuyển sang màu xanh hay không
    let carHeartChangedColor = false;

    // Lắng nghe sự kiện khi nhấp vào icon trái tim của phương tiện car
    const carHeartIcon = document.querySelector('.box-content.car i.fa-heart');
    carHeartIcon.addEventListener('click', function() {
        if (!carHeartIcon.classList.contains('active')) {
            carHeartIcon.style.color = "#39A7FF"; // Đổi màu sang xanh
            carHeartIcon.classList.add('active');
            carHeartChangedColor = true; // Cập nhật biến carHeartChangedColor khi click vào icon trái tim
        } else {
            carHeartIcon.style.color = ""; // Đổi màu về mặc định
            carHeartIcon.classList.remove('active');
            carHeartChangedColor = false; // Cập nhật biến carHeartChangedColor khi click vào icon trái tim
        }
    });

    // Lắng nghe sự kiện khi nhấp vào icon mũi tên next
    const arrowIcon = document.querySelector('.arrow-next i.fa-arrow-right');
    arrowIcon.addEventListener('click', function() {
        // Kiểm tra xem icon trái tim của phương tiện car đã được chuyển sang màu xanh và đã nhấp vào ít nhất một lần
        if (carHeartChangedColor) {
            // Thay thế class 'section-transport' bằng class 'transport-detail'
            document.querySelector('.section-transport').classList.add('hidden');
            document.querySelector('.transport-detail').classList.remove('hidden');
        }
    });
});
// End Click Next

//Click Return
let arrowReturn = document.querySelector('.arrow-return');
arrowReturn.addEventListener('click', function() {
    // Thay thế class 'transport-detail' bằng class 'section-transport'
    document.querySelector('.transport-detail').classList.add('hidden');
    document.querySelector('.section-transport').classList.remove('hidden');
});
//End Click Return
