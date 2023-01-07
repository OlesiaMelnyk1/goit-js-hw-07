import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const pictures = galleryItems
    .map(element =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`).join('');

gallery.innerHTML = pictures;
gallery.addEventListener("click", onElemShowInModal);

function onElemShowInModal(event) {
  event.preventDefault();
  const currentPicture = event.target.dataset.source;
  if (event.target.nodeName !== 'IMG')
    return;
  const instance = basicLightbox.create(
    `<div class="modal">
    <img src="${currentPicture}"></img>
    </div>`);
  instance.show();
  window.addEventListener("keydown", onEscapeClick);
  function onEscapeClick(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscapeClick);
    };
  };
};
console.log(galleryItems);
