document.addEventListener('DOMContentLoaded', function() {
    // Scrolls the page down when the "Start" button is clicked
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