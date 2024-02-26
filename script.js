function navigateToGoogleMaps() {
    // Replace the latitude and longitude with your venue's coordinates
    window.open("https://www.google.com/maps?q=17.47024,78.37329", "_blank");
}

// Automatically scroll the photo gallery

// Automatically scroll the photo carousel
const slideInterval = 3000; // Change slide every 3 seconds

const nextSlide = () => {
    const carousel = document.querySelector('.photo-carousel');
    const currentSlide = carousel.querySelector('img:first-child');
    const nextSlide = currentSlide.nextElementSibling || carousel.firstElementChild;
    const slideWidth = currentSlide.offsetWidth;
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = `translateX(-${slideWidth}px)`;
    setTimeout(() => {
        carousel.appendChild(currentSlide);
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
    }, 500);
};

setInterval(nextSlide, slideInterval);


