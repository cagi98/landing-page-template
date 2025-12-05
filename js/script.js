document.addEventListener('DOMContentLoaded', function() {
    // Fait défiler la page vers le bas au clic sur le bouton "Commencer"
    const startButton = document.querySelector('.btn-start');
    if (startButton) {
        startButton.addEventListener('click', function() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
    }
});