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


	$( ".subcategory" ).click(function() {
	  $( this ).toggleClass( "selected" );
	});

	$( ".filter-title" ).click(function() {
	  $( ".icon-filter" ).toggleClass( "red" );
	  $( ".filter" ).toggleClass( "visible" );

	});

	$( ".selector-iterior" ).click(function() {
	  $( ".interior" ).toggleClass( "hidden" );
	});

	$( ".selector-exterior" ).click(function() {
	  $( ".exterior" ).toggleClass( "hidden" );
	});

	$( ".selector-gifts" ).click(function() {
	  $( ".gifts" ).toggleClass( "hidden" );
	});

	$( ".selector-boxes" ).click(function() {
	  $( ".boxes" ).toggleClass( "hidden" );
	});

	$( ".modal-toggler" ).click(function() {
	  $( ".more__modal" ).toggleClass( "visible" );
	  if ($('.more').is('.show')) {
	  	$('.more').removeClass('show');
	  	$('.more-btn').removeClass('active');
	  }
	});

	$( ".more-toggler" ).click(function() {
	  	$('.more-btn').removeClass('active');
		$('.more').removeClass('show');
	});

});

$(document).ready(function () {  
  var top = $('.filter').offset().top;
  $(window).scroll(function (event) {
	var y = $(this).scrollTop();
		if (y >= top) {
		  $('.filter').addClass('fixed');
		} else {
		  $('.filter').removeClass('fixed');
		}
		$('.filter').width($('.filter').parent().width());
  	});
});

$(document).ready(function () { 
	wow = new WOW(
	{
	boxClass:     'wow',      // default
	animateClass: 'animated', // default
	offset:       0,          // default
	mobile:       false,      
	live:         true        // default
	}
	                )
	wow.init();
});
