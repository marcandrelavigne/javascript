/*
	SQUARE THUMBS
	------
  Using jQuery, auto resize an image container, forcing it to be square (height = width).
  To call it from another function, use squareThumbs.thumbResize();
 */


;squareThumbs = (function($) {


	/**
	 * INITIALISE
	 * ----------
	 *
	 * @return {undefined}
	 */
	(function init() {
		thumbResize();
	})();


	/**
	 * THUMBNAIL RESIZE
	 * ----------
	 *
	 * Makes sure that the content blocs thumbnails are all square
	 */
	function thumbResize() {
		$('.img__wrap').height( $('.img__wrap').width() );
	}

	// Call function on page resize
	$(window).on('resize', function(){
		thumbResize();
	});


	/*
		Return public methods
	 */
	return {
		thumbResize : thumbResize,
	}

})(jQuery);
