// Scroll Reveal
document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');
    const processSteps = document.querySelectorAll('.process-step');
    const timelineItems = document.querySelectorAll('.timeline-item');

    function reveal() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });

        processSteps.forEach((step, index) => {
            const windowHeight = window.innerHeight;
            const elementTop = step.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                setTimeout(() => {
                    step.classList.add('active');
                }, index * 200);
            }
        });

        timelineItems.forEach((item, index) => {
            const windowHeight = window.innerHeight;
            const elementTop = item.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                setTimeout(() => {
                    item.classList.add('active');
                }, index * 300);
            }
        });
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
});

// Add intersection observer for animations
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(element => {
    animationObserver.observe(element);
}); 