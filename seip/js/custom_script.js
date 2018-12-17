(function (e) {
  // alert('working...')
  
  if ($('.slider').length) {
    $('.slider').bxSlider({
      pause: 12000,
      controls: false,
      pager: false,
      auto: true,
      onSliderLoad: function () {
        setTimeout(function () {
          $('.slider > div').eq(1).find('.banner-content .text-slide-1').addClass('show animated fadeInDown');
        }, 20);
        setTimeout(function () {
          $('.slider > div').eq(1).find('.banner-content .text-slide-1').removeClass('show animated fadeInDown');
          $('.slider > div').eq(1).find('.banner-content .text-slide-2').addClass('show animated fadeInUp');
        }, 8000);
      },
      onSlideBefore: function () {
        $('.slider .banner-content div').removeClass('show animated fadeInDown');
        $('.slider .banner-content div').removeClass('show animated fadeInUp');
      },
      onSlideNext: function () {
        setTimeout(function () {
          $('.slider .banner-content .text-slide-1').addClass('show animated fadeInDown');
        }, 20);
        setTimeout(function () {
          $('.slider .banner-content .text-slide-1').removeClass('show animated fadeInDown');
          $('.slider .banner-content .text-slide-2').addClass('show animated fadeInUp');
        }, 6000);
      },
      onSlidePrev: function () {
        setTimeout(function () {
          $('.slider .banner-content .text-slide-1').addClass('show animated fadeInDown');
        }, 20);
        setTimeout(function () {
          $('.slider .banner-content .text-slide-1').removeClass('show animated fadeInDown');
          $('.slider .banner-content .text-slide-2').addClass('show animated fadeInUp');
        }, 6000);
      },
      
    });
  }
  
  
  $('.search-wrap button').click(function (e) {
    e.stopPropagation();
    $(this).parents('.search-wrap').toggleClass('show');
    setTimeout(function () {
      $('.search-wrap input').focus();
    }, 100);
  });
  
  $('.search-wrap input').click(function (e) {
    e.stopPropagation();
  });
  
  $(document).on('click', function (e) {
    $('.search-wrap').removeClass('show');
  })
  
  if ($('select').length) {
    $('select').select2({
      width: '100%'
    });
  }
  
  
})(jQuery)

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $('body').addClass('sticky')
  } else {
    $('body').removeClass('sticky')
  }
});