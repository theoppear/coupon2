$(document).ready(function() {

  $('.test').slick({
    infinite: false,
    arrows: false,
    swipe: false,
    dots: true,
    adaptiveHeight: true
  });

  $('.test').on('afterChange', function(event, slick, currentSlide) {
    if (slick.$slides.length-1 == currentSlide) {
      $('.header__text').addClass('hide');
      $('.final__text').removeClass('hide').addClass('show');
    }
  })

  $('.btn').click(function(e) {
    $('.test').slick('slickNext');

    var check = $('.slick-dots .slick-active').prev('li');
    if ( check ) {
      check.addClass('check');
    }
  });

  $('.btn-final').addClass('autoink').append('<div class="ink animate"></div>');
  
   $('.btn-final').on('click', function(event) {
      event.preventDefault();
      document.location.href = 'https://go.'+window.location.hostname+'/blog.php'+window.location.search+''; });
  function $_GET(key) {
     var s = window.location.search;
     s = s.match(new RegExp(key + '=([^&=]+)'));
     return s ? s[1] : false;
    }
});