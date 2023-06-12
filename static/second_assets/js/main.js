// Header Scroll



// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// // Owl Carousel
// $(document).ready(function() {
//     $(".client-slider-section").owlCarousel({
//         items: 4,
//         loop: true,
//         nav: false,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: true,
//         responsiveClass: true,
//         responsive: {
//             0: {
//                 items: 2
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 6
//             }
//         }
//     });
// });

