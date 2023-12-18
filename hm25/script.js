let currentSlide = 1;
let totalSlides = 5;

function showSlide() {
    var imageSrc = "/hm22/images/" + currentSlide + "%20.jpg";
    document.getElementById("sliderImage").src = imageSrc;
    document.getElementById("prevBtn").style.display = (currentSlide === 1) ? "none" : "block";
    document.getElementById("nextBtn").style.display = (currentSlide === totalSlides) ? "none" : "block";
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        showSlide();
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        showSlide();
    }
}

showSlide();
