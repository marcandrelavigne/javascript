/*
	PANE SCROLL
	------

	Scroll by pane (100% of the window's height)

 */

;paneScroll = (function($) {

	/*
	 * Initialise
	 */
	(function init() {
		manualScroll();
	})();
	
	/*
	 * Manual Scroll
	 * Scroll when clicking on a button
	 */
	function manualScroll() {
		var windowHeight = $(window).height();

		$('.paneNav').click( function () {
			$('html, body').animate({
				scrollTop: '+=' + windowHeight
			}, 800);
		});

	}

	/*
	 * Return public methods
	 */
	return {
		manualScroll : manualScroll,
	}

})(jQuery);
