$(document).ready(function () {
    $('.section--popular__cards').slick({
        dots: true,
        infinite: true,
        speed: 300,
        variableWidth: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,//3
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});