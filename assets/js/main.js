	 
    // Carousel Slier
    $(".carousel-active").owlCarousel({
        items:1,
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    });
    $(".carousel-test").owlCarousel({
        items:1,
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    });
     
	 // counterUp  
    $('.counter').counterUp({
        delay : 10,
        time: 30000,
    });
     // wow
    new WOW().init();

    jQuery(window).load(function () {

        /* Sticky Header */
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 15) {
                $('.header-fixed').addClass("sticky");
            } else {
                $('.header-fixed').removeClass("sticky");
            }
        });
        
        /* Preloader */
        $(".preloader").fadeOut()
    });