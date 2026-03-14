const thumbnails = document.querySelectorAll(".thumb");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

thumbnails.forEach(image => {
  image.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = image.getAttribute("data-large");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
