// ===============================
// Navbar Scroll Effect
// ===============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if(navbar){

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


function startCounter(){


    counters.forEach(counter => {


        const update = () => {


            const target = +counter.getAttribute("data-target");


            const count = +counter.innerText;


            const increment = Math.ceil(target / speed);



            if(count < target){


                counter.innerText = count + increment;


                setTimeout(update,30);


            }else{


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


if(year){

    year.innerText = new Date().getFullYear();

}