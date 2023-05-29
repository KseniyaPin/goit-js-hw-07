'use strict';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}" >
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
    </li>`
);

container.insertAdjacentHTML('beforeend', markup.join(''));

container.addEventListener('click', onClick);

function onClick(evt) {
  //   console.log(evt.target);
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const imgSource =
    evt.target.dataset.source ??
    evt.target.closest('gallery__item').dataset.source;
  //   console.log(imgSource);
  const currentItem = galleryItems.find(
    ({ original }) => original === imgSource
  );
  console.log(currentItem);

  const instance = basicLightbox.create(
    `
  <li class="gallery__item">
    <a class="gallery__link" href="${currentItem.original}">
    <img class="gallery__image" src="${currentItem.preview}" data-source="${currentItem.original}" alt="${currentItem.description}"/>
    </a>
    </li>`,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },
      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );

  instance.show();
  // Відмінити дії браузера за замовчанням
  evt.preventDefault();
}

function closeModal(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}
