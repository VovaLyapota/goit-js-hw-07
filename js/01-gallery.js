import { galleryItems } from "./gallery-items.js";

const listEls = document.querySelector(".gallery");

const newItemsOfListEls = [];
galleryItems.forEach((obj) => {
  let newItem = createNewItem(obj);
  newItemsOfListEls.push(newItem);
});

// Розумію, що можна було просто через innerHTML, але вирішив потренуавтись
function createNewItem(obj) {
  const newItem = document.createElement("li");
  newItem.classList.add("gallery__item");

  const newSourceOfImg = document.createElement("a");
  newSourceOfImg.classList.add("gallery__link");

  newSourceOfImg.href = obj.original;

  const newImg = document.createElement("img");
  newImg.classList.add("gallery__image");

  newImg.dataset.source = obj.original;
  newImg.src = obj.preview;
  newImg.alt = obj.description;

  newSourceOfImg.appendChild(newImg);
  newItem.appendChild(newSourceOfImg);
  return newItem;
}

listEls.append(...newItemsOfListEls);

listEls.addEventListener("click", onImgSourceClick);

function onImgSourceClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
        <img src="${event.target.dataset.source}">
    `
  );

  instance.show();

  listEls.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && instance.visible()) {
      instance.close();
    }
  });
}
