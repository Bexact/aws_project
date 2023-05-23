

const imageGallery = document.getElementById('image-gallery');

// Sample array of image URLs
const imageUrls = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
];

// Render the images in the gallery
imageUrls.forEach(url => {
    const imageItem = document.createElement('div');
    imageItem.className = 'image-item';

    const image = document.createElement('img');
    image.src = url;

    imageItem.appendChild(image);
    imageGallery.appendChild(imageItem);
});
