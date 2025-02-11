class TamilLettersBackground {
    constructor() {
        this.container = document.querySelector('.tamil-letters-bg');
        this.letters = [
            'அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 
            'ஒ', 'ஓ', 'ஔ', 'க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 
            'த', 'ந', 'ப', 'ம', 'ய', 'ர', 'ல', 'வ', 'ழ', 
            'ள', 'ற', 'ன'
        ];
        this.letterElements = [];
        this.letterCount = 40;
        this.init();
        this.animate();
    }

    init() {
        this.container.innerHTML = '';
        
        for (let i = 0; i < this.letterCount; i++) {
            const letter = document.createElement('div');
            letter.className = 'tamil-letter';
            letter.textContent = this.letters[Math.floor(Math.random() * this.letters.length)];
            
            // Random initial position
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            // Random size
            const size = Math.random() * 30 + 20; // 20px to 50px
            
            letter.style.fontSize = `${size}px`;
            letter.style.left = `${x}px`;
            letter.style.top = `${y}px`;

            // Store movement properties
            letter.dataset.dx = (Math.random() - 0.5) * 0.5; // Speed X
            letter.dataset.dy = (Math.random() - 0.5) * 0.5; // Speed Y
            
            this.container.appendChild(letter);
            this.letterElements.push(letter);
        }
    }

    animate() {
        this.letterElements.forEach(letter => {
            const rect = letter.getBoundingClientRect();
            let x = parseFloat(letter.style.left);
            let y = parseFloat(letter.style.top);
            let dx = parseFloat(letter.dataset.dx);
            let dy = parseFloat(letter.dataset.dy);

            // Bounce off edges
            if (x <= 0 || x >= window.innerWidth - rect.width) {
                letter.dataset.dx = (-dx * Math.random()).toString();
            }
            if (y <= 0 || y >= window.innerHeight - rect.height) {
                letter.dataset.dy = (-dy * Math.random()).toString();
            }

            // Update position
            x += dx;
            y += dy;

            letter.style.left = `${x}px`;
            letter.style.top = `${y}px`;
        });

        requestAnimationFrame(() => this.animate());
    }

    // Handle window resize
    handleResize() {
        this.init();
    }
}

// Initialize background
document.addEventListener('DOMContentLoaded', () => {
    const background = new TamilLettersBackground();
    window.addEventListener('resize', () => background.handleResize());
}); 