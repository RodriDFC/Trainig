$(".slider").slick({
    centerMode:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    dots:true,
    arrows:true,
    responsive: [
        {
            breakpoint: 1208,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 668,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});