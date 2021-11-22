/* =============================
            Preloader
================================*/

$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* =============================
            Team
================================*/
$(function() {
    $("#team-members").owlCarousel({
        items:2,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
}); 

/* =============================
            Progress Bars
================================*/
$(function() {
    $("#progress-elements").waypoint(function() {
        $(".progress-bar").each(function(){
            $(this).animate({
                width:$(this).attr("aria-valuenow") + "%"
            },1000);
        });
        this.destroy();
    }, {
        offset:'bottom-in-view'
    });
    
});

/* =============================
            Responsive Tabs
================================*/
$(function() {
    $('#services-tabs').responsiveTabs({
        animation: 'slide', // The panels will slide up and down
    });
});

/* =============================
            Portfolio
==============================*/
$(window).on('load', function() {
    // init Isotope
    $("#isotope-container").isotope({
        
      });
    // filter items on button click
      $("#isotope-filters").on('click', 'button', function(){
          //alert("You clicked filter buttton");

          //get filter value
          var filterValue = $(this).attr('data-filter');
          //alert("You clicked" + filterValue); 

          //filter porrtfolio
          $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
      })
});

/* =============================
            Magnifier
==============================*/
$(function() {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
          gallery: {
              enabled: true
          }
          // other options
    });
})

/* =============================
            Testimonials
==============================*/
$(function() {
    $("#testimonial-slider").owlCarousel({
        items:1,
        autoplay:false,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
});