(function (e) {
  console.log('jQuery ready');
  "use strict"; // Start of use strict
  
  $('.login-form').siblings('button').on('click', function (e) {
    $('.login-form').toggleClass('show');
    e.stopPropagation();
  })
  $('.login-form').on('click', function (e) {
    e.stopPropagation();
  })
  $(document).on('click', function (e) {
    $('.login-form').removeClass('show');
  })
  
  $('input[name=subdomain]').on('keyup',function (e) {
    $('.form-msg').removeClass('show text-danger');
  })
  $('#login-form').on('submit',function (e) {
    e.preventDefault();
    var subdomain = $('input[name=subdomain]').val();
    if( $('input[name=subdomain]').val().length === 0 ) {
      $('.form-msg').addClass('show text-danger');
      return false;
    }else{
      window.location='https://'+ subdomain +'.finman-cloud.com';
    }
    console.log('submitted')
    return false;
  })
  
  
  
  $('.nav-item a').on('click', function (e) {
    closeOffNav()
  })
  
  
})(jQuery)


$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $('body').addClass('sticky')
  } else {
    $('body').removeClass('sticky')
  }
});


function openOffNav() {
  document.getElementById("nav_canvas_off").style.right = "calc(100% - 300px)";
}

function open_nav() {
  document.getElementById("nav_canvas").style.width = "100%";
  document.getElementById("nav_canvas").style.opacity = "0.8";
}

function closeOffNav() {
  document.getElementById("nav_canvas_off").style.right = "100%";
  document.body.style.backgroundColor = "white";
  document.getElementById("nav_canvas").style.width = "0%";
  document.getElementById("nav_canvas").style.opacity = "0";
}