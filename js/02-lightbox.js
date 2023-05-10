import { galleryItems } from "./gallery-items.js";

const listEls = document.querySelector(".gallery");

const newItemsOfListEls = galleryItems
  .map((obj) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${obj.original}">
      <img class="gallery__image" src="${obj.preview}" alt="${obj.description}" />
   </a>
   </a>
</li>`;
  })
  .join("");

listEls.insertAdjacentHTML("beforeend", newItemsOfListEls);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: ".gallery__image",
  captionType: "inner",
  captionsData: "alt",
});
