$( document ).ready(function() {
 if($(window).width() < 1025) {

	} else {
		var $sticky = $('.sticky');
		var $stickyrStopper = $('.sticky-stopper');
		if (!!$sticky.offset()) { // make sure ".sticky" element exists
	
			var generalSidebarHeight = $sticky.innerHeight();
			var stickyTop = $sticky.offset().top;
			var stickOffset = 0;
			var stickyStopperPosition = $stickyrStopper.offset(); 
			var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
			var diff = stopPoint + stickOffset;
	
			$(window).scroll(function(){ // scroll event
				var windowTop = $(window).scrollTop(); // returns number
	
				if (stopPoint < windowTop) {
						$sticky.css({ position: 'absolute', top: diff });
				} else if (stickyTop < windowTop+stickOffset) {
						$sticky.css({ position: 'fixed', top: '77px' });
				} else {
						$sticky.css({position: 'absolute', top: '0px'});
				}
			});
		 }
	}
  
});