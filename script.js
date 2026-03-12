/* ==========================================
   INSTITUTE OF DIGITAL RISK - SCRIPTS
   ========================================== */

/**
 * Hamburger Menu Toggle
 * Toggles mobile navigation visibility
 */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

/**
 * Close Mobile Menu on Nav Link Click
 * Automatically closes the hamburger menu when a nav link is clicked
 */
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/**
 * Smooth Scrolling for Navigation Links
 * Enables smooth scroll behavior and updates active nav link
 */
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Remove previous active state
            navLinks.forEach(l => l.style.borderBottom = 'none');
            
            // Add active state to current link
            link.style.borderBottom = '2px solid #FF6A00';
            
            // Smooth scroll to section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Contact Form Submission Handler
 * Prevents actual submission and shows confirmation message
 */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show confirmation message
        alert('Thank you for your interest, ' + name + '! This is a demo form — we will reach out to you soon at ' + email + '.');
        
        // Reset form
        contactForm.reset();
    });
}

/**
 * Active Section Highlighting
 * Updates the nav link highlighting based on scroll position
 */
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.borderBottom = 'none';
        if (link.getAttribute('href') === '#' + current) {
            link.style.borderBottom = '2px solid #FF6A00';
        }
    });
});

/**
 * Explore Programs Button
 * Scrolls to services section
 */
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

/**
 * Intersection Observer for Fade-In Effects
 * Adds animation when elements come into view
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards, pipeline steps, and badges
const animatedElements = document.querySelectorAll(
    '.service-card, .pipeline-step, .badge'
);

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(element);
});

/**
 * Prevent Default Behavior on Demo Links
 * Handles secondary CTA button
 */
const hireTalentBtn = document.querySelector('.btn-secondary');
if (hireTalentBtn) {
    hireTalentBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Hiring Talent platform will be available soon. Contact us for more information.');
    });
}

/**
 * Page Load Animations
 * Add subtle animations when page loads
 */
window.addEventListener('load', () => {
    const header = document.querySelector('.header');
    const heroContent = document.querySelector('.hero-content');
    const heroGraphic = document.querySelector('.hero-graphic');
    
    // Fade in header
    if (header) {
        header.style.animation = 'fadeIn 0.6s ease forwards';
    }
    
    // Slide in hero content
    if (heroContent) {
        heroContent.style.animation = 'slideInLeft 0.8s ease forwards';
    }
    
    // Slide in cube graphic
    if (heroGraphic) {
        heroGraphic.style.animation = 'slideInRight 0.8s ease forwards';
    }
});

/**
 * CSS Animations for Page Load
 * Define animations for initial page load effects
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

/**
 * Mobile Menu Close on Resize
 * Closes mobile menu when resizing to desktop breakpoint
 */
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

/**
 * Trap Focus in Mobile Menu
 * Improves accessibility when mobile menu is open
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.focus();
    }
});

// Log that the script loaded successfully
console.log('IDR Website - All scripts loaded successfully');
