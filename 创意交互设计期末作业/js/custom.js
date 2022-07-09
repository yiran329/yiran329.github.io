(function ($) {
	"use strict";


	// Preloader
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");


	// menu fixed js code
	$(window).scroll(function () {
		var window_top = $(window).scrollTop() + 1;
		if (window_top > 50) {
			$('.main_menu').addClass('menu_fixed animated fadeInDown');
		} else {
			$('.main_menu').removeClass('menu_fixed animated fadeInDown');
		}
	});


	// Stellar
	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	$(document).ready(function(){

		//Testimonials
		$('.testmonial_active').owlCarousel({
			loop:true,
			margin:0,
			items:1,
			autoplay:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			nav:false,
			dots:false,
			autoplayHoverPause: true,
			autoplaySpeed: 800,
			responsive:{
				0:{
					items:1,
					dots:false,
					nav:false,
				},
				767:{
					items:1,
					dots:false,
					nav:false,
				},
				992:{
					items:1,
					nav:false
				},
				1200:{
					items:1,
					nav:false
				},
				1500:{
					items:1
				}
			}
		});


			//Testimonials
		$('.portfolio_active').owlCarousel({
			loop:true,
			margin:0,
			items:2,
			autoplay:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			nav:false,
			dots:false,
			autoplayHoverPause: true,
			autoplaySpeed: 800,
			responsive:{
				0:{
					items:1,
					dots:true,
					nav:false,
				},
				767:{
					items:2,
					dots:true,
					nav:false,
				},
				992:{
					items:2,
					dots:true,
					nav:false
				},
				1200:{
					items:2,
					dots:true,
					nav:false
				},
				1500:{
					items:2
				}
			}
		});


		var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();


	});

})(jQuery);	


// Isotope Filter
var $container = $('.work-gallery');
$container.imagesLoaded().progress( function() {
	$container.isotope();
});

$('.filter-wrapper li a').on('click', function(){
	$(".filter-wrapper li a").removeClass("active");
	$(this).addClass("active");
	var selector = $(this).attr('data-filter');
	$container.imagesLoaded().progress( function() {
		$container.isotope({
			filter: selector,
		});
	});
	return false;
});


// go to top
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('#back-to-top').fadeIn();
	} else {
		$('#back-to-top').fadeOut();
	}
});
// scroll body to 0px on click
$('#back-to-top').on('click', function () {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});



//Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})