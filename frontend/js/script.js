const heroImages = ["img/1.avif", "img/2.avif", "img/3.avif", "img/4.avif"]
let currentImage = 0;

const heroImage = document.getElementById("heroImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    heroImage.src = heroImages[currentImage];
}

prevBtn.addEventListener("click", () => {
    currentImage = (currentImage - 1 + heroImages.length) % heroImages.length;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentImage = (currentImage + 1) % heroImages.length;
    updateImage();
});