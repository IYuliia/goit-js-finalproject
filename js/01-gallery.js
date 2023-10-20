import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
let instance;

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
console.log(gallery);

gallery.addEventListener("click", handleClick);
gallery.addEventListener("keydown", handleKey);

function handleClick(e) {
  e.preventDefault();
  console.log(e.target);

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const original = e.target.getAttribute("data-source");
  const description = e.target.getAttribute("alt");
  showModal({ original, description });
}

function showModal({ original, description }) {
  instance = basicLightbox.create(`
    <img src="${original}" alt="${description}" />
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

function handleKey(e) {
  console.log(e.code);
  if (e.code === "Escape") {
    instance.close();
  }
}
