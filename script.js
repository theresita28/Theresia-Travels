document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery .gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightbox-content');
  const caption = document.getElementById('caption');
  const close = document.querySelector('.close');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  
  let currentIndex;

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      lightbox.style.display = 'block';
      if (item.querySelector('img')) {
        lightboxContent.innerHTML = `<img src="${item.querySelector('img').src}" alt="${item.querySelector('img').alt}">`;
        caption.innerHTML = item.querySelector('img').getAttribute('data-caption') || item.querySelector('img').alt;
      } else if (item.querySelector('video')) {
        const videoSource = item.querySelector('video source').src;
        lightboxContent.innerHTML = `<video controls style="width: 100%; height: auto;"><source src="${videoSource}" type="video/mp4"></video>`;
        caption.innerHTML = item.querySelector('video').innerText;
      }
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

  function showItem(index) {
    const item = galleryItems[index];
    if (item.querySelector('img')) {
      lightboxContent.innerHTML = `<img src="${item.querySelector('img').src}" alt="${item.querySelector('img').alt}">`;
      caption.innerHTML = item.querySelector('img').getAttribute('data-caption') || item.querySelector('img').alt;
    } else if (item.querySelector('video')) {
      const videoSource = item.querySelector('video source').src;
      lightboxContent.innerHTML = `<video controls style="width: 100%; height: auto;"><source src="${videoSource}" type="video/mp4"></video>`;
      caption.innerHTML = item.querySelector('video').innerText;
    }
  }

  prev.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    showItem(currentIndex);
  });

  next.addEventListener('click', () => {
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    showItem(currentIndex);
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
        showItem(currentIndex);
      } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
        showItem(currentIndex);
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
