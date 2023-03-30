// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const parentGallery = document.querySelector('.gallery');
const elementGallery = galleryItems
  .map(
    item => `
    <li class="gallery__item">

   <a class="gallery__link" href="${item.original}">

      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>

   </a>
</li>`
  )
  .join('');
parentGallery.insertAdjacentHTML('beforeend', elementGallery);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
