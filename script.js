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
