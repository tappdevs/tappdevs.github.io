(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('nav.navbar a[href*="#"]:not([href="#"]), a.move_top[href*="#"]:not([href="#"]), .sidebar-nav a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 60)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('nav.navbar a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#top_nav',
    offset: 120
  });

})(jQuery); // End of use strict
