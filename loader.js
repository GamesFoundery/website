document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const logo = document.querySelector('.logo');

    setTimeout(function() {
        loadingScreen.classList.add('loaded');
        logo.style.animation = "fade-in 2s forwards"; // Lancer l'animation de fondu
        setTimeout(function() {
            window.location.href = 'home.html';
        }, 1000); // Attendre 2 secondes (temps d'apparition du logo)
    }, 1000); // Attendre 2 secondes (temps d'apparition du logo)
});
