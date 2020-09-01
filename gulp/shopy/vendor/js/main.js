$(document).ready(function () {
    $('.section--Arrivals__product').slick({
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
    $('.section--best__sale').slick({
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