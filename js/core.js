// @codekit-prepend "vendor/jquery-3.4.1.min.js";

document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio)+', maximum-scale=1.0, user-scalable=0');
alert(window.devicePixelRatio);
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
