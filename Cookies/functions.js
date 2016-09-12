// Create Cookie
$('#hello').click(function(){
	$.cookie('cookie-name', true);
});


// Delete the Cookie
$('#goodbye').click(function(){
	$.cookie('cookie-name', false);
});


// If Cookie Exists
if($.cookie('cookie-name') === 'true'){
	// Do something.
} else {
	// Do something else.
}


// Detect Cookie
$.cookie('test_cookie', 'cookie_value', { path: '/' });
	if (!$.cookie('test_cookie') === 'cookie_value') {
	$( "#dialogcookie" ).dialog();
}
