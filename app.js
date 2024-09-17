let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Only hide navbar on scroll if the burger menu is not active (closed)
    if (!navLinks.classList.contains('active')) {
        if (scrollTop > lastScrollTop) {
            // Scroll Down: Hide navbar
            navbar.classList.add('hidden');
        } else {
            // Scroll Up: Show navbar
            navbar.classList.remove('hidden');
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative values
});

// Burger menu toggle for mobile
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Ensure navbar does not hide when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Smooth scroll to the section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Close the navbar only in mobile view after clicking the link
        if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active'); // Close the menu after scrolling
        }
    });
});

