$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $(‘b’).addClass(‘changeColor’)
      }
      if ($(this).scrollTop() < 50) {
         $(‘b’).removeClass(‘changeColor’)
      }
   });
});
