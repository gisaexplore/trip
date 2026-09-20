// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (navbar) {

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );

    }

});


// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".counter");

const speed = 40;

function startCounter() {

    counters.forEach(counter => {

        const update = () => {

            const target =
                +counter.getAttribute("data-target");

            const count =
                +counter.innerText;

            const increment =
                Math.ceil(target / speed);


            if (count < target) {

                counter.innerText =
                    count + increment;

                setTimeout(update, 30);

            } else {

                counter.innerText =
                    target + "+";

            }

        };

        update();

    });

}

window.addEventListener(
    "load",
    startCounter
);


// ===============================
// AUTO YEAR FOOTER
// ===============================

const year =
    document.getElementById("year");

if (year) {

    year.innerText =
        new Date().getFullYear();

}


// ==========================================
// IMAGE PREVIEW GALLERY
// ==========================================

const galleryImages =
    document.querySelectorAll(".gallery-img");

const previewBox =
    document.getElementById("imagePreview");

const previewImage =
    document.getElementById("previewImage");

const closePreview =
    document.querySelector(".close-preview");


galleryImages.forEach(image => {

    image.addEventListener("click", function () {

        if (previewBox && previewImage) {

            previewBox.style.display = "flex";

            previewImage.src = this.src;

        }

    });

});


if (closePreview) {

    closePreview.addEventListener(
        "click",
        function () {

            if (previewBox) {

                previewBox.style.display = "none";

            }

        }
    );

}


if (previewBox) {

    previewBox.addEventListener(
        "click",
        function (event) {

            if (
                previewImage &&
                event.target !== previewImage
            ) {

                previewBox.style.display = "none";

            }

        }
    );

}


// ==========================================
// OPEN TRIP POSTER MODAL
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const openTripButton =
        document.getElementById("openTripButton");

    const openTripModal =
        document.getElementById("openTripModal");

    const closeOpenTrip =
        document.getElementById("closeOpenTrip");

    const openTripBackdrop =
        document.querySelector(".opentrip-modal-backdrop");


    // ===============================
    // BUKA MODAL
    // ===============================

    if (openTripButton && openTripModal) {

        openTripButton.addEventListener(
            "click",
            function () {

                openTripModal.classList.add("active");

                document.body.style.overflow = "hidden";

            }
        );

    }


    // ===============================
    // TUTUP DENGAN TOMBOL X
    // ===============================

    if (closeOpenTrip && openTripModal) {

        closeOpenTrip.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                openTripModal.classList.remove("active");

                document.body.style.overflow = "";

            }
        );

    }


    // ===============================
    // TUTUP DENGAN BACKDROP
    // ===============================

    if (openTripBackdrop && openTripModal) {

        openTripBackdrop.addEventListener(
            "click",
            function () {

                openTripModal.classList.remove("active");

                document.body.style.overflow = "";

            }
        );

    }


    // ===============================
    // TUTUP DENGAN ESC
    // ===============================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                openTripModal &&
                openTripModal.classList.contains("active")
            ) {

                openTripModal.classList.remove("active");

                document.body.style.overflow = "";

            }

        }
    );

});