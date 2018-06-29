/*
	FIRST WORD SELECTOR
	------
	Wrap the first word of a title with a <span>.

 */
;(function firstWordSelector($) {

	/**
	 * INITIALISE
	 * ----------
	 *
	 * @return {undefined}
	 */
	(function init() {
		firstWord();
	})();


	function firstWord() {
		$(".home__title").html(function(){
			var text= $(this).text().trim().split(" ");
			var first = text.shift();
			return (text.length > 0 ? "<span>"+ first + "</span> " : first) + text.join(" ");
		});
	}

	/*
		Return public methods
	 */
	return {
		firstWord : firstWord,
	}


})(jQuery);
