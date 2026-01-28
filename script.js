// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle (if needed)
const navToggle = document.createElement('button');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '<i class="fas fa-bars"></i>';
navToggle.style.display = 'none';

// Show/hide mobile menu based on screen size
function checkScreenSize() {
    if (window.innerWidth <= 768) {
        navToggle.style.display = 'block';
        document.querySelector('nav ul').style.display = 'none';
    } else {
        navToggle.style.display = 'none';
        document.querySelector('nav ul').style.display = 'flex';
    }
}

// Add mobile menu functionality
navToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.alignItems = 'center';
        nav.style.marginTop = '20px';
    } else {
        nav.style.display = 'none';
    }
});

// Add nav toggle to header
const header = document.querySelector('header .container');
header.appendChild(navToggle);

// Check screen size on load and resize
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

// Form submission handler
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.querySelector('input[type="email"]').value = '';
        }
    });
}

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .about-text, .about-image, .contact-info, .contact-form');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animations
const animatedElements = document.querySelectorAll('.service-card, .about-text, .about-image, .contact-info, .contact-form');
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);
