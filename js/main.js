/*---------------------------------------------------
ACTIVE JS FILES:
	[1. Slicknav ]
	[2. Sticky ]
	[3. Scrollspy ]
	[4. FlipClock ]
	[5. Smooth Scroll ]
	[6. ScrollUp ]
	[7. WOW ]
	[8. NiceScroll ]
	[9. Map ]
	[10. jquery-ui-slider ]
	[11. Popup-Slider ]
	[12. Fancybox ]
	[13. Testmonial ]
----------------------------------------------------*/
jQuery(document).ready(function($){
/*-------------------
[1. Slicknav ]
---------------------*/
	$('#nav').slicknav();
/*-------------------
[2. Sticky ]
---------------------*/
	// Create a clone of the menu, right next to original.
$('.header_menu').addClass('original').clone().insertAfter('.header_menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

    if ($(window).scrollTop() >= (orgElementTop)) {
		// scrolled past the original position; now only show the cloned, sticky element.

		// Cloned element should always have same left position and width as original element.     
		orgElement = $('.original');
		coordsOrgElement = orgElement.offset();
		leftOrgElement = coordsOrgElement.left;  
		widthOrgElement = orgElement.css('width');
		$('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
		$('.original').css('visibility','hidden');
	  } else {
		// not scrolled past the menu; only show the original menu.
		$('.cloned').hide();
		$('.original').css('visibility','visible');
	  }
	}
/*-------------------
[3. Scrollspy ]
---------------------*/
	$('body').scrollspy({
		target: '#navbar-example',
		offset: 95
	});
/*-------------------
[4. FlipClock ]
---------------------*/
	var clock = new FlipClock($('.your-clock'), {
	// ... your options here
	});
/*-------------------
[5. Smooth Scroll ]
---------------------*/
	var $root = $('html, body');
	$('#nav li a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 2000, function () {
			window.location.hash = href;
		});
		return false;
	});
/*-------------------
[6. ScrollUp ]
---------------------*/
	$.scrollUp({
		animation: 'slide', // Fade, slide, none
		scrollText: [
		  "<i class='fa fa-chevron-up'></i>"
		]
	});
/*-------------------
[7. WOW ]
---------------------*/
	wow = new WOW(
		{
		  boxClass:     'wow',      // default
		  animateClass: 'animated', // default
		  offset:       0,          // default
		  mobile:       true,       // default
		  live:         true        // default
		}
	  )
	wow.init();
/*-------------------
[8. NiceScroll ]
---------------------*/
    (function () {
   var nice = $("html").niceScroll({
    cursorcolor: '#ccc',
      cursorwidth: '7px',
      cursorborderradius: '10px',
      cursorborder: '1px solid #000',
      zindex:"9999"
    
    });  // The document page (body)
    $("#boxscroll").niceScroll({touchbehavior:true});
	
    }());
/*-------------------
[9. Map ]
---------------------*/
	function initialize() {
	  var mapProp = {
		center:new google.maps.LatLng(51.508742,-0.120850),
		zoom:5,
		scrollwheel: false,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
/*-------------------
[10. jquery-ui-slider ]
---------------------*/
	$(function() {
		$( "#slider-5" ).slider({
		   orientation:"horizontal",
		   max: 20000,
		   values:20000,
		   slide: function( event, ui ) {
			  $( "#minval" ).val( ui.value );
		   }	
		});
		$( "#minval" ).val( $( "#slider-5" ).slider( "value" ) );
	});
/*-------------------
[11. Popup-Slider ]
---------------------*/
	$("#popup_carousel").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 5,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [979,4],
	  itemsTablet: [600,3],
	  itemsMobile : false,
	  autoPlay: true,
	  pagination:false,
	  navigation:true,
	  navigationText:["<i class='fa fa-angle-left popup_prev'></i>","<i class='fa fa-angle-right popup_next'></i>"]
	});
/*-------------------
[12. Fancybox ]
---------------------*/
	$(document).ready(function() {
		$('.fancybox').fancybox({
			padding : 0,
			openEffect  : 'elastic'
		});
	});
/*-------------------
[13. Testmonial ]
---------------------*/
	$("#testmonial-slider").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
	  itemsTablet: [600,1],
	  itemsMobile : false,
	  autoPlay: true,
	  pagination:false,
	  navigation:true,
	  navigationText:["<i class='fa fa-angle-left popup_prev'></i>","<i class='fa fa-angle-right popup_next'></i>"]
	});
	
});