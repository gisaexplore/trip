// ===============================
// Navbar Scroll Effect
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
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

const speed = 40;


function startCounter() {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);


            if (count < target) {

                counter.innerText = count + increment;

                setTimeout(update, 30);

            } else {

                counter.innerText = target + "+";

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
// Auto Year Footer
// ===============================

const year = document.getElementById("year");


if (year) {

    year.innerText = new Date().getFullYear();

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

    closePreview.onclick = function () {

        if (previewBox) {

            previewBox.style.display = "none";

        }

    };

}


if (previewBox) {

    previewBox.onclick = function (e) {

        if (e.target !== previewImage) {

            previewBox.style.display = "none";

        }

    };

}


// ==========================================
// OPEN TRIP POSTER
// ==========================================

const openTripButton =
    document.getElementById("openTripButton");

const openTripModal =
    document.getElementById("openTripModal");

const closeOpenTrip =
    document.getElementById("closeOpenTrip");

const openTripBackdrop =
    document.querySelector(".opentrip-modal-backdrop");


// ==========================================
// BUKA POSTER OPEN TRIP
// ==========================================

function openOpenTripModal() {

    if (!openTripModal) return;

    openTripModal.classList.add("active");

    // Mencegah halaman belakang ikut scroll
    document.body.style.overflow = "hidden";

}


// ==========================================
// TUTUP POSTER OPEN TRIP
// ==========================================

function closeOpenTripModal() {

    if (!openTripModal) return;

    openTripModal.classList.remove("active");

    // Mengembalikan scroll halaman
    document.body.style.overflow = "";

}


// ==========================================
// KLIK CARD OPEN TRIP
// ==========================================

if (openTripButton) {

    openTripButton.addEventListener(
        "click",
        openOpenTripModal
    );


    // Bisa dibuka menggunakan keyboard
    openTripButton.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openOpenTripModal();

            }

        }
    );

}


// ==========================================
// TOMBOL X / CLOSE
// ==========================================

if (closeOpenTrip) {

    closeOpenTrip.addEventListener(
        "click",
        closeOpenTripModal
    );

}


// ==========================================
// KLIK AREA GELAP
// ==========================================

if (openTripBackdrop) {

    openTripBackdrop.addEventListener(
        "click",
        closeOpenTripModal
    );

}


// ==========================================
// TOMBOL ESC UNTUK MENUTUP
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            openTripModal &&
            openTripModal.classList.contains("active")
        ) {

            closeOpenTripModal();

        }

    }
);

// ==========================================
// OPEN TRIP POSTER MODAL
// ==========================================

const openTripButton = document.getElementById("openTripButton");
const openTripModal = document.getElementById("openTripModal");
const closeOpenTrip = document.getElementById("closeOpenTrip");
const openTripBackdrop = document.querySelector(".opentrip-modal-backdrop");


// Buka modal ketika card Open Trip diklik
if (openTripButton && openTripModal) {

    openTripButton.addEventListener("click", function () {

        openTripModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

}


// Tombol X
if (closeOpenTrip && openTripModal) {

    closeOpenTrip.addEventListener("click", function () {

        openTripModal.classList.remove("active");

        document.body.style.overflow = "";

    });

}


// Klik area gelap untuk menutup
if (openTripBackdrop && openTripModal) {

    openTripBackdrop.addEventListener("click", function () {

        openTripModal.classList.remove("active");

        document.body.style.overflow = "";

    });

}


// Tekan tombol ESC untuk menutup
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && openTripModal) {

        openTripModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});