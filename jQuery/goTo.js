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
		if($(window).width() >= 992){
			if( $( '.goto' ).length > 0 ) {
				$( '.goto[href^="#"]' ).on( 'click', function() {
					var me =$( this ),
						the_id = me.attr( 'href' );
	
					$( 'html, body' ).animate( {
						scrollTop: $( the_id ).offset().top-92
					}, 'slow' );
	
					return false;
				});
			}
		} else if($(window).width() <= 991){
			if( $( '.goto' ).length > 0 ) {
				$( '.goto[href^="#"]' ).on( 'click', function() {
					var me =$( this ),
						the_id = me.attr( 'href' );
	
					$( 'html, body' ).animate( {
						scrollTop: $( the_id ).offset().top-65
					}, 'slow' );
	
					return false;
				});
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
