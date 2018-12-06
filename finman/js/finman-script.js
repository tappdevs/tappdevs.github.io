(function (e) {
  console.log('jQuery ready');
  "use strict"; // Start of use strict
  
  
  
  
$('.nav-item a').on('click',function (e) {
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
  document.getElementById("nav_canvas_off").style.width = "250px";
}
function open_nav() {
  document.getElementById("nav_canvas").style.width = "100%";
  document.getElementById("nav_canvas").style.opacity = "0.8";
}
function closeOffNav() {
  document.getElementById("nav_canvas_off").style.width = "0%";
  document.body.style.backgroundColor = "white";
  document.getElementById("nav_canvas").style.width = "0%";
  document.getElementById("nav_canvas").style.opacity = "0";
}