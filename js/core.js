// @codekit-prepend "vendor/jquery-3.4.1.min.js";
// @codekit-prepend "vendor/headroom.js";
// @codekit-prepend "vendor/jquery.headroom.js";
// @codekit-prepend "vendor/calendar.js";
// @codekit-prepend "vendor/bxslider.js";
// @codekit-prepend "vendor/scrollbar.js";
// @codekit-prepend "vendor/fs-core.js";
// @codekit-prepend "vendor/fs-dropdown.js";
// @codekit-prepend "vendor/fs-mediaquery.js";
// @codekit-prepend "vendor/fs-touch.js";
// @codekit-prepend "vendor/fs-transition.js";
// @codekit-prepend "vendor/fs-lightbox.js";

$(function(){
	// $("header").headroom({
	// 	 offset : 150,
	// 	 tolerance : 15,
	// });

	$("select.input--select").dropdown();

	$('.footer--top--payment').lightbox({
		customClass: 'footer__lightbox',
		labels: {
			close: 'clear'
		}
	});

	$('.tophead__search .mi').click(function(){
		$('.tophead__search').toggleClass('tophead__search--active')
	})

	$('.home__tl__overlay').lightbox({
		labels: {
			close: 'clear'
		}
	});
	$('.home__banner').bxSlider({
		auto: true,
		infiniteLoop: true,
		pager: true,
		controls: false,
		wrapperClass: 'bx-home'
	});

	$('.home__sls').scrollbar({
        "autoScrollSize": true,
        "scrollx": $('.scrollx')
    });

    $('.header__nav').click(function(){
    	$('nav').toggleClass('nav--active');
    	$(this).toggleClass('header__nav--active');
    })

	$('.home__pls').bxSlider({
		controls: false,
		pager: false,
		auto: true,
		infiniteLoop: true,
		speed: 200
	});

	if ($(window).width() <= 600) {
    }
    else {
        var bx = $('.home__sys').bxSlider({
			pager: false,
			auto: true,
			infiniteLoop: true,
			speed: 200,
			minSlides: 1,
			maxSlides: 3,
			slideWidth: 600,
			slideMargin: 64,
			shrinkItems: true,
			moveSlides: 1,
			onSlideAfter: bxMove,
			onSliderLoad: function() {
				$(".home__sy:not(.bx-clone)").eq(1).addClass('active');
			},
			nextText:'keyboard_arrow_right',
			prevText:'keyboard_arrow_left'
		});
		$('.about__imgs').bxSlider({
			minSlides: 2,
			maxSlides: 2,
			slideWidth: 600,
			slideMargin: 20,
			nextText:'keyboard_arrow_right',
			prevText:'keyboard_arrow_left'
		})
    }

	function bxMove($ele, from, to) {
		$('.home__sy').removeClass('active');
		// bx.goToSlide(to);
		$ele.next().addClass('active');
	}



});
