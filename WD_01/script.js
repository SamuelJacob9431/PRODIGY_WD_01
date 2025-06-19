// Theme Switching
document.querySelector('.theme-slider').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    
    if (isDark) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    updateThemeLabels();
});

// Update theme labels based on current theme
function updateThemeLabels() {
    const labels = document.querySelectorAll('.theme-label');
    const isDark = document.body.classList.contains('dark-theme');
    
    labels[0].style.color = isDark ? 'var(--accent)' : 'var(--text-color)';
    labels[1].style.color = isDark ? '#888' : 'var(--accent)';
}

// Check and apply saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}
updateThemeLabels();

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navIcons = document.querySelectorAll('.nav-icons a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on nav icons
navIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Hero Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;
let slideInterval;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Next slide function
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

// Previous slide function
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

// Go to specific slide
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Update slider
function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    // Reset timer
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Start slider
slideInterval = setInterval(nextSlide, 5000);

// Pause slider on hover
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));

// Testimonial Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDotsContainer = document.querySelector('.testimonial-dots');
let currentTestimonial = 0;
let testimonialInterval;

// Create testimonial dots
testimonialCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('testimonial-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTestimonial(index));
    testimonialDotsContainer.appendChild(dot);
});

const testimonialDots = document.querySelectorAll('.testimonial-dot');

// Next testimonial function
function nextTestimonial() {
    testimonialCards[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    testimonialCards[currentTestimonial].classList.add('active');
    updateTestimonialDots();
}

// Go to specific testimonial
function goToTestimonial(index) {
    testimonialCards[currentTestimonial].classList.remove('active');
    currentTestimonial = index;
    testimonialCards[currentTestimonial].classList.add('active');
    updateTestimonialDots();
}

// Update testimonial dots
function updateTestimonialDots() {
    testimonialDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
    
    // Reset timer
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextTestimonial, 7000);
}

// Start testimonial slider
testimonialInterval = setInterval(nextTestimonial, 7000);

// Form submission
const repairForm = document.getElementById('repairForm');
repairForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your service request! We will contact you shortly to confirm your appointment.');
    repairForm.reset();
});

// Service card animations
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Pricing card animations
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});