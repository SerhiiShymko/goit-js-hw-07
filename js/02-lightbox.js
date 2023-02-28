// import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);
// // Change code below this line

// const galleryContainer = document.querySelector(".gallery");

// const createGalleryContainer = (items) => {
//   return items
//     .map(
//       (item) =>
//         `<div class="gallery__item">
//   <a class="gallery__item" href="${item.original}">
//   <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
// </a>
// </div>`
//     )
//     .join("");
// };

// const addGalleryContainer = createGalleryContainer(galleryItems);
// galleryContainer.innerHTML = addGalleryContainer;

// galleryContainer.insertAdjacentHTML("beforeend", addGalleryContainer);

// galleryContainer.addEventListener("click", openModal);

// function openModal(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   const instance = basicLightbox.create(
//     `<img src="${event.target.dataset.source}">`,
//     {
//       onShow: (instance) => {
//         window.addEventListener("keydown", onEscKeyPress);
//       },
//       onClose: (instance) => {
//         window.removeEventListener("keydown", onEscKeyPress);
//       },
//     }
//   );

//   instance.show();

//   function onEscKeyPress(event) {
//     if (event.code === "Escape") {
//       instance.close();
//       // console.log(event.code);
//     }
//   }
// }
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryMarkUp = document.querySelector(".gallery");

const galleryEl = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
  )
  .join("");

galleryMarkUp.insertAdjacentHTML("beforeend", galleryEl);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});


// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// console.log(galleryItems);

// const galleryDiv = document.querySelector(".gallery");
// const galleryCard = createGalleryCards(galleryItems);
// galleryDiv.insertAdjacentHTML("afterbegin", galleryCard);

// function createGalleryCards(images) {
//   return images
//     .map(
//       (image) =>
//         `<a class="gallery__item" href="${image.original}" onclick="return false;">
// <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
// </a>`
//     )
//     .join("");
// }

// const lightbox = new SimpleLightbox(".gallery a", {
//   captionDelay: 250,
//   captionsData: "alt",
// });