document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero-title');
    let isHovering = false;
    
    title.addEventListener('mouseenter', () => {
        isHovering = true;
    });

    title.addEventListener('mouseleave', () => {
        isHovering = false;
        title.style.backgroundImage = `linear-gradient(
            to right,
            #000000,
            #1a1a1a
        )`;
    });

    title.addEventListener('mousemove', (e) => {
        if (!isHovering) return;

        const rect = title.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate angle based on cursor position
        const angle = Math.atan2(y - rect.height/2, x - rect.width/2) * (180 / Math.PI);
        
        // Calculate distance from center for intensity
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distance = Math.sqrt(
            Math.pow(x - centerX, 2) + 
            Math.pow(y - centerY, 2)
        );
        
        // Normalize distance for gradient spread
        const spread = Math.min(distance / (rect.width / 2), 1) * 30;
        
        title.style.backgroundImage = `linear-gradient(
            ${angle}deg,
            #83692F,
            #BF953F ${50 - spread}%,
            #FBF5B7 50%,
            #AA771C ${50 + spread}%,
            #83692F
        )`;
        
        title.style.backgroundSize = '200% 200%';
        title.style.backgroundPosition = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
        title.style.transition = 'background-position 0.1s ease-out';
    });
}); 