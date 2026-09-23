const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");

function hideModal(clickedEl) {
  clickedEl.addEventListener("click", () => {
  lightbox.style.removeProperty("flex-direction");
  lightbox.style.display = "none";
  })
}

galleryItems.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightbox.style.flexDirection = "column";
    lightbox.querySelector("#lightbox-image").setAttribute("src", img.src.slice(0, -14) + ".jpg");

    hideModal(lightbox);
    hideModal(lightbox.querySelector("#close-btn"));
  })
});