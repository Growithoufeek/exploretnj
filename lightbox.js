document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    // Add click handlers to all gallery images
    const galleryImages = document.querySelectorAll('.temple-gallery img, .agriculture-gallery img, .heritage-item img');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const fullImage = document.createElement('img');
            fullImage.src = this.src;
            
            lightbox.innerHTML = '';
            lightbox.appendChild(fullImage);
            lightbox.classList.add('active');
        });
    });

    // Close lightbox on click
    lightbox.addEventListener('click', function() {
        this.classList.remove('active');
    });
}); 