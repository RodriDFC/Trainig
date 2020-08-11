$(document).ready(function () {
    $('.section--slick__slickSlider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        variableWidth: true,
        arrows: true,
        slidesToShow: 3,
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