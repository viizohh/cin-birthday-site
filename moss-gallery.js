// Moss Gallery Lightbox Functionality
(function() {
    const lightbox = document.getElementById('moss-lightbox');
    const lightboxImg = document.getElementById('moss-lightbox-img');
    const closeBtn = document.querySelector('.moss-lightbox-close');
    const prevBtn = document.querySelector('.moss-lightbox-prev');
    const nextBtn = document.querySelector('.moss-lightbox-next');
    const mossItems = document.querySelectorAll('.moss-item');

    let currentIndex = 0;
    const images = Array.from(mossItems).map(item => item.getAttribute('data-src'));

    // Open lightbox
    mossItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Navigate images
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    function showImage(index) {
        lightboxImg.src = images[index];
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }
    });
})();
