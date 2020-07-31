$(document).ready(function (){
    var x = document.getElementById("site--header__menu");
    $('#btn-menu').click(function () {
        $('.site--header__menu').slideToggle();
    });
    $(window).resize(function() {
        var heightBrowser =$(window).width();
        if(heightBrowser >900){
            x.style.display="block";
        }
    });
});