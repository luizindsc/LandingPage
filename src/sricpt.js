// 1. Fade-in effect for the hero section on page load
window.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero__content');
    heroContent.style.opacity = 0; // Start with opacity 0
    heroContent.style.transition = 'opacity 1s ease-in-out';

    setTimeout(() => {
        heroContent.style.opacity = 1; // Fade in after a slight delay
    }, 100);
});

// 2. Slide-in effect for product cards when they enter the viewport
const productCards = document.querySelectorAll('.product-card');
const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.2, // Trigger when 20% of the element is visible
};

const productObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const card = entry.target;
            card.style.opacity = 0;
            card.style.transform = 'translateX(-50px)'; // Start off-screen to the left
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

            // Stagger the animation for each card
            setTimeout(() => {
                card.style.opacity = 1;
                card.style.transform = 'translateX(0)';
            }, index * 150); // Delay increases for each card

            observer.unobserve(card); // Stop observing once animated
        }
    });
}, observerOptions);

productCards.forEach(card => productObserver.observe(card));

// 3. Bounce effect for subscription plans on hover
const plans = document.querySelectorAll('.plan');

plans.forEach(plan => {
    plan.addEventListener('mouseenter', () => {
        plan.style.transition = 'transform 0.3s ease-in-out';
        plan.style.transform = 'scale(1.05) translateY(-10px)'; // Bounce up slightly
    });

    plan.addEventListener('mouseleave', () => {
        plan.style.transform = 'scale(1) translateY(0)'; // Return to original state
    });
});