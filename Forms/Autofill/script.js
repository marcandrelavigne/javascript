/* ==============================
	Form autofill
============================== */
jQuery(document).ready(function($) {


	// Créer l'événement tripleclick
	$.event.special.tripleclick = {

	    setup: function(data, namespaces) {
	        var elem = this, $elem = jQuery(elem);
	        $elem.bind('click', jQuery.event.special.tripleclick.handler);
	    },

	    teardown: function(namespaces) {
	        var elem = this, $elem = jQuery(elem);
	        $elem.unbind('click', jQuery.event.special.tripleclick.handler)
	    },

	    handler: function(event) {
	        var elem = this, $elem = jQuery(elem), clicks = $elem.data('clicks') || 0;
	        clicks += 1;
	        if ( clicks === 3 ) {
	            clicks = 0;

	            // set event type to "tripleclick"
	            event.type = "tripleclick";

	            // let jQuery handle the triggering of "tripleclick" event handlers
	           $.event.dispatch.apply(this, arguments)
	        }
	        $elem.data('clicks', clicks);
	    }

	};

	// Afficher le bouton lorsque #contact-title est cliqué 3 fois
	$( "#contact-title" ).bind("tripleclick", function() {
		$('#autofillbtn').toggle("slow");
	});


	// Autofill
	(function($){
		$.fn.extend({
			autofill: function(data, options) {
				var settings = {
					findbyname: true,
					restrict: true
				},
				self = this;

				if ( options ) {
					$.extend( settings, options );
				}

				return this.each(function() {
					$.each( data, function(k, v) {

						// switch case findbyname / findbyid

						var selector, elt;

						if ( settings.findbyname ) { // by name

							selector = '[name="'+k+'"]';
							elt = ( settings.restrict ) ? self.find( selector ) : $( selector );

							if ( elt.length == 1 ) {
								elt.val( ( elt.attr("type") == "checkbox" ) ? [v] : v );
							} else if ( elt.length > 1 ) {
								// radio
								elt.val([v]);
							} else {
								selector = '[name="'+k+'[]"]';
								elt = ( settings.restrict ) ? self.find( selector ) : $( selector );
								elt.each(function(){
									$(this).val(v);
								});
							}

						} else { // by id

							selector = '#'+k;
							elt = ( settings.restrict ) ? self.find( selector ) : $( selector );

							if ( elt.length == 1 ) {
								elt.val( ( elt.attr("type") == "checkbox" ) ? [v] : v );
							} else {
								var radiofound = false;

								// radio
								elt = ( settings.restrict ) ? self.find( 'input:radio[name="'+k+'"]' ) : $( 'input:radio[name="'+k+'"]' );
								elt.each(function(){
									radiofound = true;
									if ( this.value == v ) { this.checked = true; }
								});
								// multi checkbox
								if ( !radiofound ) {
									elt = ( settings.restrict ) ? self.find( 'input:checkbox[name="'+k+'[]"]' ) : $( 'input:checkbox[name="'+k+'[]"]' );
									elt.each(function(){
										$(this).val(v);
									});
								}
							}
						}
					});
				});
			}
		});
	})(jQuery);

	// Le bouton (.autofill-button) remplis le formulaire (#form) lorsque cliqué.
	$(".autofill-button").bind("click", function() {
	    $("#form").autofill(data);
	});

});
