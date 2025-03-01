// Thay đổi hình ảnh trường mầm non mỗi 5 giây
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];
let currentImageIndex = 0;
const imageElements = document.querySelectorAll('.main-image');

function showImage(index) {
    imageElements.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
    currentImageIndex = index;
}

function changeImage(direction = 1) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    showImage(currentImageIndex);
}

// Thêm hiệu ứng gợn sóng cho các nút menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        this.appendChild(ripple);
        
        let x = e.clientX - this.getBoundingClientRect().left;
        let y = e.clientY - this.getBoundingClientRect().top;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Thêm sự kiện cho nút bấm slider
document.querySelector('.prev').addEventListener('click', () => changeImage(-1));
document.querySelector('.next').addEventListener('click', () => changeImage(1));

// Khởi tạo hình ảnh đầu tiên
showImage(currentImageIndex);

// Tự động chuyển ảnh mỗi 5 giây
setInterval(() => changeImage(1), 5000);