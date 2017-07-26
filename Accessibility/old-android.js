jQuery(document).ready(function($) {	
	var nua = navigator.userAgent.toLowerCase();
	var is_android = ((nua.indexOf('mozilla/5.0') > -1 && nua.indexOf('android ') > -1 && nua.indexOf('applewebkit') > -1) && !(nua.indexOf('chrome') > -1));
	
	// Add .oldandroid Class to body
	if(is_android) {
		jQuery('body').addClass('💩');
	}
});
