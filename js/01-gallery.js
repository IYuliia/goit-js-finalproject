import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
console.log(gallery);

gallery.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();

  if (e.target.classList.contains("gallery__link")) {
    const galleryItem = e.target.closest(".gallery__item");
    if (galleryItem) {
      const original = e.target.getAttribute("data-source");
      const description = e.target.getAttribute("alt");
      showModal({ original, description });
    }
  }
}

function showModal({ original, description }) {
  const instance = basicLightbox.create(`
          <img
            data-source="${original}"
            alt="${description}"
          />
`);
  instance.show();
}

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}
