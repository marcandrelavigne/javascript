/*
	PANE SCROLL
	------

	Scroll by pane (100% of the window's height)

 */

;paneScroll = (function($) {

	/**
	 * INITIALISE
	 * ----------
	 *
	 * @return {undefined}
	 */
	(function init() {
		manualScroll();
	})();

	function manualScroll() {
		var windowHeight = $(window).height();

		$('.paneNav').click( function () {
			$('html, body').animate({
				scrollTop: '+=' + windowHeight
			}, 800);
		});

	}

	/*
		Return public methods
	 */
	return {
		manualScroll : manualScroll,
	}

})(jQuery);
