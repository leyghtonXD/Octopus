document.addEventListener("DOMContentLoaded", function() {
    var dropbtn = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que el enlace realice la acción predeterminada
        dropdownContent.classList.toggle('show'); // Alterna la clase 'show'
    });

    document.addEventListener('click', function(e) {
        if (!dropbtn.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
    
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrusel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carrusel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
