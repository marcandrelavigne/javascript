;(function userAgents($) {

	// Desktop User Agent
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Trident/i.test(navigator.userAgent) ? true : false;
	if(!isMobile) {
	  $('body').addClass('desktop');
	}

	// iOS User Agent
	if( navigator.userAgent.match(/iP(hone|od|ad)/i) ) {
		$('body').addClass('ios');

		function iosVhHeightBug() {
	    	var height = $(window).height();
			$("#cssmenu ul.open").css('min-height', height);
			$(".slideshow").css('min-height', height);
		}

		iosVhHeightBug();
		$(window).bind('resize', iosVhHeightBug);
	}

	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if(isAndroid) {
		$('body').addClass('android');
	}

	// Old Android Fix
	var nua = navigator.userAgent.toLowerCase();
	var is_android = ((nua.indexOf('mozilla/5.0') > -1 && nua.indexOf('android ') > -1 && nua.indexOf('applewebkit') > -1) && !(nua.indexOf('chrome') > -1));
	if(is_android) {
		$('body').addClass('oldandroid');
	}

})(jQuery);
