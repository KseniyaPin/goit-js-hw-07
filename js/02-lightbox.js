'use strict';
import { galleryItems } from './gallery-items.js';

const container = document.querySelector('.gallery');

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}" >
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
    </li>`
);

container.insertAdjacentHTML('beforeend', markup.join(''));

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
