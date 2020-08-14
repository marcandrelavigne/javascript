/*
	GO TO
	------
	Smooth scroll to a specific location in the page

 */
;(function goTo($) {
	
	/**
	 * INITIALISE
	 * ----------
	 *
	 * @return {undefined}
	 */
	(function init() {
		goToFunc();
	})();

	// GoTo main function
	function goToFunc() {
		if( $( '.goto' ).length > 0 ) {
			if($(window).width() >= 992){
				$( 'html, body' ).animate( {
					scrollTop: $( the_id ).offset().top-92
				}, 'slow' );
			} else {
				$( 'html, body' ).animate( {
					scrollTop: $( the_id ).offset().top-0
				}, 'slow' );
			}
		}
	}

	// Call function on page resize
	$(window).on('resize', function(){
		goToFunc();
	});

	// Return public methods
	return {
		goToFunc : goToFunc,
	}
	

})(jQuery);
