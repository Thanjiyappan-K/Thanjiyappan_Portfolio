// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Hero section animations
gsap.from(".profile-pic", {
    scale: 0,
    rotation: 360,
    opacity: 0,
    duration: 1.5,
    ease: "back.out(1.7)"
});

gsap.from(".profile-content h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});

// Animate sections on scroll
gsap.utils.toArray("section").forEach(section => {
    gsap.from(section.querySelectorAll(".fade-in"), {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2
    });
});

// Card animations
gsap.utils.toArray(".card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

// Social links animation
gsap.from(".social-links a", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    delay: 1,
    stagger: 0.1,
    ease: "back.out(1.7)"
});

// Hover animations
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Profile picture hover effect
const profilePic = document.querySelector(".profile-pic");
profilePic.addEventListener("mouseenter", () => {
    gsap.to(profilePic, {
        rotationY: 180,
        duration: 1,
        ease: "power2.inOut"
    });
});

profilePic.addEventListener("mouseleave", () => {
    gsap.to(profilePic, {
        rotationY: 0,
        duration: 1,
        ease: "power2.inOut"
    });
});
