/*
	STICKY HEADER
	------
	Set header classes on scroll.
	Available classes :
    "scrolled" : Page has scrolled a specific amount of pixels.
		"nav-down" : User is scrolling up, the nav is down.
		"nav-up" : User is scrolling down, the nav is up.
 */
 
;StickyHeader = (function($) {

	/**
	 * INITIALISE
	 * ----------
	 *
	 * @return {undefined}
	 */
	(function init() {

		if ( $(window).scrollTop() >= 1 ) {
			didScroll = true;
			hasScrolled();
		}

	})();


	/**
	 * SCROLL FUNCTIONS
	 *
	*/
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = 65;
	var win = $(window).height();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        scrolledClass();
	        didScroll = false;
	    }
	}, 250);
  
  // Nav-up & Nav-down
	function hasScrolled() {
	    var st = $(this).scrollTop();

	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    // If they scrolled down and are past the navbar, add class .nav-up.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('header').removeClass('nav-down').addClass('nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('header').removeClass('nav-up').addClass('nav-down');
	        }
	    }
	    lastScrollTop = st;
	}

	// Add Scrolled Class
	function scrolledClass() {
	    var header = $('header');
	    $(window).load(function() {
		    var scroll = $(window).scrollTop();
		    if (scroll >= 65) {
	            header.addClass('scrolled');
	        } else {
	            header.removeClass('scrolled');
	        }
	    });

	    $(window).scroll(function() {
		    var scroll = $(window).scrollTop();
	        if (scroll >= 65) {
	            header.addClass('scrolled');
	        } else {
	            header.removeClass('scrolled');
	        }
	    });
	}

})(jQuery);
