import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);


galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

function createGalleryItems(items) {
  return items
    .map(item => {
      return `
      
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
    })
    .join('');
}



const lightbox = new SimpleLightbox('.gallery__item' , {
    captionsData: 'alt',
    captionDelay: 200,
    overlayOpacity: 0.8,
});