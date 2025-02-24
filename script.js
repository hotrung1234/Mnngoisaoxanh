// Thay đổi hình ảnh trường mầm non mỗi 5 giây
const images = [
    'school-image1.jpg',
    'school-image2.jpg', // Thêm các đường dẫn hình ảnh khác nếu có
    'school-image3.jpg'
];
let currentImageIndex = 0;
const imageElement = document.querySelector('.main-image');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
}

setInterval(changeImage, 5000); // Thay đổi hình mỗi 5 giây