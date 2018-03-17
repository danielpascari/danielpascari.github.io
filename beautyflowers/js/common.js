$( document ).ready(function() {

	$( ".hamburger" ).click(function() {
	  $( this ).toggleClass( "is-active" );
	  $( ".menu" ).toggleClass( "show" );
	  if ($('.menu').is('.show')) {
	  	$('.more-btn').removeClass('active');
	  	$('.more').removeClass('show');
	  }
	});

	$( ".more-btn" ).click(function() {
	  $( this ).toggleClass( "active" );
	  $( ".more" ).toggleClass( "show" );
	  if ($('.more').is('.show')) {
	  	$('.hamburger').removeClass('is-active');
	  	$('.menu').removeClass('show');
	  }
	});

	$( ".social-btn" ).click(function() {
	  $( this ).toggleClass( "active" );
	  $( ".link" ).toggleClass( "show" );
	});


	$('.owl-topsales').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    loop:true,
	    navText: ["<i class='icon-arrow-back'></i>","<i class='icon-arrow-next'></i>"],
	    responsiveClass:true,
	    navContainer: ".topsales__nav",
	    responsive:{

	        0:{
	            items:1,
	            autoplay:true
	        },

	        600:{
	            items:1,
	        },

	        1000:{
	            items:2,
	        }
	    }
	});

	$('.owl-testimonials').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    items:1,
	    autoplay:true,
	    dots:true,
	    dotsContainer: ".testimonials__dots",

	});

});

