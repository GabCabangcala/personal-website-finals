document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        once: false, 
        mirror: true 
    });
});

document.querySelector('.nav-link[href="#home"]').addEventListener('click', function() {
    const heroSection = document.querySelector('#home');
    heroSection.classList.remove('animate__animated', 'animate__fadeIn');
    void heroSection.offsetWidth; 
    heroSection.classList.add('animate__animated', 'animate__fadeIn');
});