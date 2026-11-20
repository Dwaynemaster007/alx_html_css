document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!menuToggle || !navMenu) {
        return;
    }

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        menuToggle.classList.toggle('open');
    });

    // Close the menu after choosing a section on mobile
    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            menuToggle.classList.remove('open');
        });
    });
});
