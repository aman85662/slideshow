const images = ['2wallpaperflare.com_wallpaper.jpg',
    'image1.jpg',
    'image2.jpg',
    'image3.png',
    'image4.jpg',
    'image5.jpg'
];

let currentIndex = 0;

function showImage(index) {
    const slideshowImage = document.getElementById('slideshow-image');
    slideshowImage.src = images[index];
}
function prevImage() {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    showImage(currentIndex);
}
function nextImage() {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    showImage(currentIndex);
}
showImage(currentIndex);


