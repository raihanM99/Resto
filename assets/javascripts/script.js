$(function() {
  $('.owl-carousel').owlCarousel({
    items:   1,
    loop:   true,
    margin:  40,
    dots:    false,
    nav:     false,
    stagePadding: 100,
  });
  
  function responsive_content() {
    var carousel_content = $('.restaurants-carousel > div');
    $('.owl-stage').css('padding-left', '');
    $('.restaurants-carousel').css('height', `${carousel_content.height()}px`);
  }

  responsive_content();
  $(window).on('changed.owl.carousel', function(event) {
    setTimeout(function() {
      responsive_content();
    });
  });
  
  AOS.init();
});