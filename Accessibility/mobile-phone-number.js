// Disable automatic phone number detection on mobile devices, so the Fax numbers won't be clickable
// Add this in the <head>: <meta name="format-detection" content="telephone=no" />

// Define the user agent
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Trident/i.test(navigator.userAgent) ? true : false;

// If on mobile device
// Replace: <span class="phone-number">819-349-8888</span>
// By: <a href="tel:819-349-8888">819-349-8888</a>
if(isMobile) {
	$('.phone-number').each(function() {
		$(this).replaceWith(
			$('<a href="tel:' + this.innerHTML + '">' + this.innerHTML + '</a>')
		);
	});
}
