const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close-btn");

const galleryItems = document.querySelectorAll(".gallery-card, .featured-card");

galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        const img = item.querySelector("img");

        lightbox.classList.add("active");
        lightboxImg.src = img.src;
        lightboxCaption.textContent = item.dataset.title || "";
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});