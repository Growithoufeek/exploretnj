// Force black text on load and after any dynamic content changes
function enforceTextColors() {
    const elements = document.querySelectorAll('*:not(.main-nav *):not(.main-footer *)');
    elements.forEach(element => {
        if (window.getComputedStyle(element).color === 'rgb(255, 255, 255)') {
            element.style.color = '#1d1d1f';
        }
    });
}

document.addEventListener('DOMContentLoaded', enforceTextColors);
// Run again after a slight delay to catch dynamically loaded content
setTimeout(enforceTextColors, 1000); 