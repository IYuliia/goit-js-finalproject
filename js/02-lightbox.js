import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
gallery.addEventListener("click", handleClick);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function handleClick(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    const images = gallery.querySelectorAll(".gallery__image");
    const index = Array.from(images).indexOf(e.target);

    lightbox.open(index);
  }
}

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}
