$(document).ready(function() {

    /************ owlCarousel *************/
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            650: {
                items: 2.5
            },
            750: {
                items: 3
            },
            900: {
                items: 3.75
            },
            1024: {
                items: 4
            },
            1150: {
                items: 5
            }
        }
    });
});
// ,
//             500: {
//                 items: 2.5
//             },
//             900: {
//                 items: 3
//             },
//             970: {
//                 items: 3.5
//             },
//             1000: {
//                 items: 4
//             },
//             1200: {
//                 items: 5
//             }