$(function(){
    $().timelinr({
        orientation: 	'vertical',
        issuesSpeed: 	300,
        datesSpeed: 	200,
        arrowKeys: 		'true',
        startAt:		1
    })
});

jQuery(document).ready(function($) {
    var changeClass = function() {
      var windowSize = document.body.clientWidth;
      if (windowSize < 640) {
        $('#dates').addClass('timeline-in-mobile');
      } else if (windowSize >= 641) {
        $('#dates').removeClass('timeline-in-mobile');
      };
    };
    $(window).resize(function(){
      changeClass();
    });
    //Fire it when the page first loads:
    changeClass();
  });