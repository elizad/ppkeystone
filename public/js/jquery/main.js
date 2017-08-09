// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 3;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();
	if(Math.abs(lastScrollTop - st) <= delta)
		return;
	if (st > lastScrollTop && st > navbarHeight){
		$('#header').removeClass('nav-down').addClass('nav-up');
	} else {
		if(st + $(window).height() < $(document).height()) {
			$('#header').removeClass('nav-up').addClass('nav-down');
		}
	}

	lastScrollTop = st;
}

equalheight = function(container){

	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
	$(container).each(function() {

		$el = $(this);
		$($el).height('auto');
		var topPostion = $el.position().top;

		if (currentRowStart !== topPostion) {
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
};

window.addEventListener("load", function load(event){
	console.log("All resources finished loading!");
	//equalheight('.equal .company-services__item');
	equalheight('.light-slider .review-customer');
});

window.addEventListener("load", function load(event){
	console.log("resize!");
	//equalheight('.equal .company-services__item');
	equalheight('.light-slider .review-customer');
});

// document.querySelector( ".navbar-toggle" )
// 	.addEventListener( "click", function() {
// 		this.classList.toggle( "active" );
// 	});

function timeSince(date) {

	var seconds = Math.floor((new Date() - date) / 1000);

	var interval = Math.floor(seconds / 31536000);

	if (interval > 1) {
		return interval + " years";
	}
	interval = Math.floor(seconds / 2592000);
	if (interval > 1) {
		return interval + " months";
	}
	interval = Math.floor(seconds / 86400);
	if (interval > 1) {
		return interval + " days";
	}
	interval = Math.floor(seconds / 3600);
	if (interval > 1) {
		return interval + " hours";
	}
	interval = Math.floor(seconds / 60);
	if (interval > 1) {
		return interval + " minutes";
	}
	return Math.floor(seconds) + " seconds";
}
var aDay = 24*60*60*1000
console.log(timeSince(new Date(Date.now()-aDay)));
console.log(timeSince(new Date(Date.now()-aDay*2)));
