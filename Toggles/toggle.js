// Fade-in Toggle
$("[id^=toggle]").click(function() {		
	if ($(this).hasClass('open')) {
		$('#togglcontent'+ this.id.match(/\d+/) ).slideUp("slow").removeClass('open');
		$(this).removeClass('open');
	} else {
		$('#togglcontent'+ this.id.match(/\d+/) ).slideDown("slow").addClass('open');
		$(this).addClass('open');
	}
});
