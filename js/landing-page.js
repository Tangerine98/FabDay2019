jQuery(document).ready(function($) {
    var alterClass = function() {
      var windowSize = document.body.clientWidth;
      if (windowSize < 640) {
        $('.is-vertical-center-mobile').removeClass('is-vertical-center-desktop');
      } else if (windowSize >= 641) {
        $('.is-vertical-center-mobile').addClass('is-vertical-center-desktop');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });