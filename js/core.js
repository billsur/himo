// @codekit-prepend "vendor/jquery-3.4.1.min.js";
// @codekit-prepend "vendor/slick.min.js";

$(function(){
  const sliderContainer = $('.hrls__slides, .hp__slides');

  sliderContainer.slick({
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  sliderContainer.on('wheel', (function(e) {
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));

  $('.header__action').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 125,
    }, 1000)
  })
})

// home spec number animation
$(window).on('scroll', function () {
	var top_of_element = $(".hbo").offset().top;
	var bottom_of_element = $(".hbo").offset().top + $(".hbo").outerHeight();
	var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
	var top_of_screen = $(window).scrollTop();

	if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
		$('.hbo__feature__title__number').each(function (index, element) {
      let initialPoint = index === 0 ? -20 : 0;
			$(element).prop('Counter', initialPoint).animate({
				Counter: $(element).text()
			}, {
				duration: 2500,
				easing: 'swing',
				step: function (now) {
					$(element).text(Math.ceil(now));
				}
			});
		});

		$(window).unbind('scroll');
	}
})