$(document).ready(function(){  
      $('.slideshow-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    var prev = $(".slick-prev");
    prev.html('<i class="fa-solid fa-arrow-left"></i>');

    var next = $(".slick-next");
    next.html('<i class="fa-solid fa-arrow-right"></i>');


})
