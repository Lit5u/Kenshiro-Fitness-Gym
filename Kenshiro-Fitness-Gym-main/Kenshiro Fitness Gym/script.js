let current = 0;
const slides = document.querySelectorAll(".slide");

function showslide(index) {
    container.style.transform = 'translateY(-${index*100}vh)';
}

showslide(current);

setInterval(() => {
    current = (current +1) % slides.length;
    showslide(current);
}, 2000);