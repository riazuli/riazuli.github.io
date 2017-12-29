(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	$('.typeit').typeIt({
		     whatToType: ["This is a string!", "And here's another one."],
		     typeSpeed: 100,
		     breakLines: false
		});

    });


}(jQuery));	
