console.log("Script Loaded");

document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    // =========================
    // LIGHTBOX
    // =========================
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("lightbox-caption");

    const galleryItems = document.querySelectorAll(".gallery-item");

    // =========================
    // PAGE LOAD ANIMATION
    // =========================

    // โหลดก่อนทันที
    const instantReveal = [
        document.querySelector(".main-header"),
        document.querySelector("nav")
    ].filter(Boolean);

    instantReveal.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = `all 0.9s ease ${index * 0.2}s`;
    });

    setTimeout(() => {
        instantReveal.forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    }, 200);


    // =========================
    // SCROLL REVEAL
    // =========================
    const scrollRevealElements = [
        document.querySelector(".section-title"),
        ...document.querySelectorAll(".gallery-item"),
        document.querySelector(".main-footer")
    ].filter(Boolean);

    scrollRevealElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(60px)";
        el.style.transition = "all 0.8s ease";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    scrollRevealElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.08}s`;
        observer.observe(el);
    });


    // =========================
    // LIGHTBOX OPEN
    // =========================
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {

            const img = item.querySelector("img");
            const title = item.querySelector("h3")
                ? item.querySelector("h3").innerText
                : "ผลงานของพ่อต้อย";

            if (!img) return;

            lightboxImg.src = img.src;
            lightboxImg.alt = title;

            if (captionText) {
                captionText.innerText = title;
            }

            lightbox.style.display = "flex";

            setTimeout(() => {
                lightbox.classList.add("active");
            }, 10);

            body.style.overflow = "hidden";
        });
    });


    // =========================
    // LIGHTBOX CLOSE
    // =========================
    function closeBox() {
        lightbox.classList.remove("active");

        setTimeout(() => {
            lightbox.style.display = "none";
            body.style.overflow = "auto";
        }, 400);
    }

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            closeBox();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeBox();
        }
    });

});