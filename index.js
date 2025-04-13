// Simple scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Highlight active navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');

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

    ScrollReveal().reveal('.card', {
        duration: 1000,
        distance: '50px',
        easing: 'ease-in-out',
        origin: 'right',
        reset: true
    });

    // Text animation
    const textAnimation = document.getElementById('text-animation');
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
});