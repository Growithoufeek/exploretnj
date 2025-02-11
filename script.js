function createFloatingLetters() {
    const container = document.querySelector('.tamil-letters-bg');
    const tamilLetters = ['த', 'ஞ்', 'சா', 'வூ', 'ர்', 'மி', 'க', 'ன்'];
    
    for (let i = 0; i < 50; i++) {
        const letter = document.createElement('div');
        letter.className = 'tamil-letter';
        letter.textContent = tamilLetters[Math.floor(Math.random() * tamilLetters.length)];
        letter.style.left = `${Math.random() * 100}%`;
        letter.style.animationDelay = `${Math.random() * 20}s`;
        letter.style.fontSize = `${Math.random() * 2 + 2}rem`;
        container.appendChild(letter);
    }
}

document.addEventListener('DOMContentLoaded', createFloatingLetters);

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}); 