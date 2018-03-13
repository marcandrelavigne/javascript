/*
	STICKY CONTENT
	------

 */
;stickyContent = (function($) {

	function sticky_relocate() {

	    var window_top = $(this).scrollTop();
	    var div_top    = $('.stickyDiv').offset().top;
	    var footer_top = $('.footer').offset().top;
      
      	    // Activate sticky Div when it get past the window's top
	    if (window_top > div_top) {
	        $('.stickyDiv').addClass('fixedContent');
	        $('.stickyDiv').removeClass('bottomReached');
	    } else {
	        $('.stickyDiv').removeClass('fixedContent');
	        $('.stickyDiv').removeClass('bottomReached');
	    }
      
      	    // Desactivate sticky when reaching the footer
	    if (window_top > footer_top - $(window).height() ) {
	        $('.stickyDiv').removeClass('fixedContent');
	        $('.stickyDiv').addClass('bottomReached');
	    }

	}

	$(function () {
	    $(window).scroll(sticky_relocate);
	    sticky_relocate();
	});

})(jQuery);
