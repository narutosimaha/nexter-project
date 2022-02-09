"use strict";

const gallery = document.querySelector(".gallery");

const insertGalleryImg = function () {
  for (let i = 1; i < 15; i++) {
    const html = `<figure class="gallery__item gallery__item--${i}">
        <img src="./img/gal-${i}.jpeg" alt="gallery-img" class="gallery__img" />
      </figure>`;
    gallery.insertAdjacentHTML("beforeend", html);
  }
};

insertGalleryImg();
