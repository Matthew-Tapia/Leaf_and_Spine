const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');

var imageUrls = [
  "Assets/LAS_Plant_2.jpeg",
  "Assets/LAS_Plant_3.jpeg",
  "Assets/LAS_Plant_4.jpeg",
  "Assets/LAS_Plant_5.jpeg",
  "Assets/LAS_Plant_6.jpeg",
  "Assets/LAS_Plant_7.jpeg",
  "Assets/LAS_Plant_8.jpeg",
  "Assets/LAS_Plant_9.jpeg",
  "Assets/LAS_Plant_10.jpeg",
];

// Load each image into the carousel
imageUrls.forEach((url, index) => {
    // Create a new carousel item
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
  
    // Create a new image element
    const img = document.createElement('img');
    img.src = url;
    img.classList.add('d-block', 'w-100', 'carousel-img', 'flex-img');
    img.alt = 'Slide ' + index;
  
    // Add the image to the carousel item and the carousel item to the carousel
    carouselItem.appendChild(img);

    carouselInner.appendChild(carouselItem);
});

console.log(carouselInner);