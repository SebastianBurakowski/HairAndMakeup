$(document).ready(function () {
    $('.review__boxes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3300,
        mobileFirst: true,
        arrows: false, // Domyślnie wyłączone dla małych ekranów
        responsive: [
            {
                breakpoint: 430,
                settings: {
                    arrows: true, // Włączone od 771px wzwyż
                    nextArrow: '<button class="review__slick" type="button"><i class="fa-solid fa-caret-right fa-beat-fade"></i></button>',
                    prevArrow: '<button class="review__slick" type="button"><i class="fa-solid fa-caret-left fa-beat-fade"></i></button>'
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true, // Włączone od 771px wzwyż
                    nextArrow: '<button class="review__slick" type="button"><i class="fa-solid fa-caret-right fa-beat-fade"></i></button>',
                    prevArrow: '<button class="review__slick" type="button"><i class="fa-solid fa-caret-left fa-beat-fade"></i></button>'
                }
            }
        ]
    });
});
