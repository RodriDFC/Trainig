$(document).ready(function () {
    $('.section--test__kitchens').slick({
        dots: true,
        infinite: true,
        speed: 300,
        variableWidth: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,//3
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});