// Select all sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

// Update active navigation link while scrolling
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + current
        );
    });
});