$(document).ready(function () {
    $('.review__boxes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3300,
        arrows: true,
        nextArrow:'<button class="review__slick" type="button" ><i class="fa-solid fa-caret-right fa-beat-fade"></i></button>',
        prevArrow: '<button class="review__slick" type="button" ><i class="fa-solid fa-caret-left fa-beat-fade"></i></button>',
        mobileFirst: true,
        responsive: [{
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],

    });
})
