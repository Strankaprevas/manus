// ========================================
// TRAKCIA Autoservis - Vanilla JavaScript
// ========================================

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

function closeMobileMenu() {
    if (menuToggle) {
        menuToggle.classList.remove('active');
    }
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMobileMenu();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        }
    });
});

// Navbar scroll effect
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (navbar) {
        if (lastScrollY > 40) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .review-card, .feature, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name') || contactForm.querySelector('input[type="text"]').value,
            phone: formData.get('phone') || contactForm.querySelector('input[type="tel"]').value,
            email: formData.get('email') || contactForm.querySelector('input[type="email"]').value,
            service: contactForm.querySelector('select').value,
            message: contactForm.querySelector('textarea').value
        };
        
        // Log form data (in production, send to backend)
        console.log('Form submitted:', data);
        
        // Show success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Správa odoslaná!';
        submitBtn.style.backgroundColor = '#15803d';
        
        // Reset form
        contactForm.reset();
        
        // Restore button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
        }, 3000);
    });
}

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active state to navbar links based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#16a34a';
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// Prevent layout shift on scroll
document.addEventListener('DOMContentLoaded', () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
        document.body.style.overflow = 'overlay';
    }
});
