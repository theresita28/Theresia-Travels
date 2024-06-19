document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const caption = document.getElementById('caption');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let currentIndex;

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImage.src = image.src;
            caption.innerHTML = image.getAttribute('data-caption') || image.alt;
            currentIndex = index;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === close) {
            lightbox.style.display = 'none';
        }
    });

    function showImage(index) {
        lightboxImage.src = galleryImages[index].src;
        caption.innerHTML = galleryImages[index].getAttribute('data-caption') || galleryImages[index].alt;
    }

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
                showImage(currentIndex);
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
                showImage(currentIndex);
            } else if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            }
        }
    });
});



//Map---------------------------------------------------------------------------------
// Set the coordinates for the location
function initMap(location) {

    const locationCoordinates = location; // Replace with your desired coordinates

    // Initialize the map and set its view to the chosen geographical coordinates and a zoom level
    const map = L.map('map').setView(locationCoordinates, 13);

    // Add the base map layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map at the specified coordinates
    const marker = L.marker(locationCoordinates).addTo(map);


}
