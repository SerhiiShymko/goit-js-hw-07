import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const createGalleryContainer = (items) => {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");
};

const addGalleryContainer = createGalleryContainer(galleryItems);
galleryContainer.innerHTML = addGalleryContainer;

// galleryContainer.insertAdjacentHTML("beforeend", addGalleryContainer);

galleryContainer.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
      // console.log(event.code);
    }
  }
}
