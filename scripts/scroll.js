document.addEventListener('DOMContentLoaded', function() {
    var navMenu = document.querySelector('.nav-menu');
    var scrollThreshold = navMenu.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            navMenu.classList.add('scrolled');
        } else {
            navMenu.classList.remove('scrolled');
        }
    });
});
