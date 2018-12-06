(function (e) {
  // alert('working...')
  $('.search-wrap button').click(function (e) {
    e.stopPropagation();
    $(this).parents('.search-wrap').toggleClass('show');
    setTimeout(function() { $('.search-wrap input').focus(); }, 100);
  });
  
  $('.search-wrap input').click(function (e) {
    e.stopPropagation();
  });
  
  $(document).on('click', function (e) {
    $('.search-wrap').removeClass('show');
  })
  
  
})(jQuery)

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $('body').addClass('sticky')
  } else {
    $('body').removeClass('sticky')
  }
});