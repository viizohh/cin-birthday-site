// Main image click handler
const mainImage = document.getElementById('main-image');
const birthdayText = document.getElementById('birthday-text');
const galleryList = document.getElementById('gallery-list');
let galleryListVisible = false;

mainImage.addEventListener('click', () => {
    if (!galleryListVisible) {
        // Hide main image and birthday text
        mainImage.classList.add('fade-out');
        birthdayText.classList.add('fade-out');

        // Show gallery after brief delay
        setTimeout(() => {
            galleryList.classList.remove('hidden');
            galleryList.classList.add('fade-in');
            galleryListVisible = true;
        }, 300);
    }
});

// Gallery item click handlers
const galleryItems = document.querySelectorAll('.gallery-item');
const expandedView = document.getElementById('expanded-view');
const expandedImage = document.getElementById('expanded-image');
const expandedText = document.querySelector('.expanded-text p');
const backButton = document.getElementById('back-button');

galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        const fullImageName = item.getAttribute('data-full');
        const imageTitle = item.getAttribute('data-title');
        const imageText = item.getAttribute('data-text');

        // Set expanded image source and alt text
        expandedImage.src = `images/${fullImageName}`;
        expandedImage.alt = imageTitle;

        // Set expanded text content
        if (imageText) {
            expandedText.textContent = imageText;
        }

        // Hide gallery list
        galleryList.classList.add('hidden');
        galleryList.classList.remove('fade-in');

        // Show expanded view
        if (expandedView.classList.contains('hidden')) {
            expandedView.classList.remove('hidden');
            expandedView.classList.add('fade-in');
        }
    });
});

// Back button handler
backButton.addEventListener('click', () => {
    // Hide expanded view
    expandedView.classList.add('hidden');
    expandedView.classList.remove('fade-in');

    // Show gallery list again
    galleryList.classList.remove('hidden');
    galleryList.classList.add('fade-in');
});
