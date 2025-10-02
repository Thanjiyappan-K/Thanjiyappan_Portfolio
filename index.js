// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }

    // Highlight active navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // ScrollReveal animations
    if (window.ScrollReveal) {
        ScrollReveal().reveal('section', {
            duration: 1000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
            reset: true
        });

        ScrollReveal().reveal('.profile-section', {
            duration: 1000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'left',
            reset: true
        });

        ScrollReveal().reveal('.card, .skill-category, .project-card, .certificate-card, .hackathon-card', {
            duration: 1000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'right',
            reset: true
        });
    }

    // Text animation for hero section
    const textAnimation = document.getElementById('text-animation');
    if (textAnimation) {
        const titles = ['Full Stack Developer', 'Software Engineer', 'Backend Developer', 'Frontend Specialist'];
        let currentTitleIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function typeText() {
            const currentTitle = titles[currentTitleIndex];
            
            if (isDeleting) {
                currentCharIndex--;
            } else {
                currentCharIndex++;
            }

            textAnimation.innerHTML = currentTitle.substring(0, currentCharIndex)
                .split('')
                .map(char => `<span class="text-animation-item visible">${char}</span>`)
                .join('');

            if (!isDeleting && currentCharIndex === currentTitle.length) {
                isDeleting = true;
                typingSpeed = 1000; // Pause before deleting
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentTitleIndex = (currentTitleIndex + 1) % titles.length;
                typingSpeed = 100;
            } else {
                typingSpeed = isDeleting ? 50 : 100;
            }

            setTimeout(typeText, typingSpeed);
        }

        typeText();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                }
            }
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.skill-category, .project-card, .certificate-card, .hackathon-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form will be handled by Formspree
            // You can add custom validation here if needed
            const submitBtn = this.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
                submitBtn.disabled = true;
            }
        });
    }

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Intersection Observer for fade-in animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        document.querySelectorAll('section, .card, .skill-category, .project-card, .certificate-card, .hackathon-card').forEach(el => {
            observer.observe(el);
        });
    }

    // Add CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .nav-links.show {
            display: flex !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border-top: 1px solid #e5e7eb;
        }
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
});