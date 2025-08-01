// JavaScript Document
// Abrir el menú
function openNav(event) {
    event.preventDefault();  // Evita que el enlace haga scroll hacia arriba
    document.getElementById("mobile-menu").style.width = "100%";
}

// Cerrar el menú
function closeNav(event) {
    event.preventDefault();  // Evita cualquier comportamiento no deseado
    document.getElementById("mobile-menu").style.width = "0%";
}

let currentPosition = 0;

function moverCarrusel(direction) {
    const carrusel = document.querySelector('.testimonios-carrusel');
    const cards = document.querySelectorAll('.testimonio-card');
    const cardWidth = cards[0].offsetWidth + 20; // Ancho de cada tarjeta + gap
    const maxPosition = -((cards.length - 3) * cardWidth); // Posición máxima a la izquierda

    // Calcula la nueva posición
    currentPosition += direction * cardWidth;

    // Asegura que la posición no sobrepase los límites
    if (currentPosition > 0) {
        currentPosition = maxPosition;
    } else if (currentPosition < maxPosition) {
        currentPosition = 0;
    }

    // Aplica el desplazamiento
    carrusel.style.transform = `translateX(${currentPosition}px)`;
}