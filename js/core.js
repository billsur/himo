// @codekit-prepend "vendor/jquery-3.4.1.min.js";
// @codekit-prepend "vendor/slick.min.js";

$(function(){
  const sliderContainer = $(".hrls__slides, .hp__slides");

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
})
