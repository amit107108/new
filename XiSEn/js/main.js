(function ($) {
"use strict";


$(document).ready(function(){
    $(".client-slider").owlCarousel( {
    		loop: true,
    		center: true,
    		items: 1,
    		margin: 0,
    		autoplay: true,
    		dots:true,
        nav:false,
    		autoplayTimeout: 8500,
    		smartSpeed: 450,
      	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    		responsive: {
    			0: {
    				items: 1
    			},
    			768: {
    				items: 1
    			},
    			1170: {
    				items: 1
    			}
    		}
    	});
});

$(document).ready(function(){
    $(".brand-slider").owlCarousel( {
    		loop: true,
    		center: true,
    		items: 5,
    		margin: 10,
    		autoplay: true,
    		dots:false,
            nav:true,
    		autoplayTimeout: 1500,
    		smartSpeed: 450,
      	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    		responsive: {
    			0: {
    				items: 2
    			},
    			768: {
    				items: 3
    			},
    			1170: {
    				items: 5
    			}
    		}
    	});
});


// mean meanmenu
jQuery(document).ready(function () {
  jQuery('#mobile-menu').meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "992",
  });
});

// SCROLL TO Top
$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 1000);
    })
});


//one page nav
$(document).ready(function() {
	$('.main-menu nav ul').onePageNav();
});



/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



})(jQuery);
