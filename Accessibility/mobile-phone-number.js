if(isMobile.phone) {
	$('.phone-number').each(function() {
		$(this).replaceWith(
			$('<a href="tel:' + this.innerHTML + '">' + this.innerHTML + '</a>')
		);
	});
}