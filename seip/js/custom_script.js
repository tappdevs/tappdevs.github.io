(function (e) {
  // alert('working...')
  
  if ($('.slider').length) {
    $('.slider').bxSlider({
      onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
        console.log(currentSlideHtmlObject);
        // $('.active-slide').removeClass('active-slide');
        $('.slider > div').eq(currentSlideHtmlObject + 1).find('.banner-content').addClass('show animated fadeIn')
      },
      onSliderLoad: function () {
        $('.slider > div').eq(1).find('.banner-content').addClass('show animated fadeIn')
      },
      onSlideBefore: function ($slideElement, oldIndex, newIndex) {
        $slideElement.find('.banner-content').addClass('show animated fadeIn')
        $('.slider > div').eq(oldIndex).find('.banner-content').removeClass('show animated fadeIn')
      }
      
      /*onSliderLoad:function (currentIndex) {
        console.log();
        setTimeout(function(){
          $('.banner-content').addClass('show animated fadeIn').removeClass('fadeOut');
        }, 3000);
      },
      onSlideAfter:function (e) {
        setTimeout(function(){
          $('.banner-content').addClass('show animated bounceInLeft').removeClass('fadeOut');
        }, 3000);
      },*/
      
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