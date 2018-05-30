function jump() {
  /*window.scroll({
    top: 1000,
    left: 0,
    behavior: 'smooth'
  });*/
  document.querySelector('b').scrollIntoView({
    behavior: 'smooth'
  });
}
/*$('a[href^="#"]').on('click', function(event) {
        $('html, body').stop().animate({
            scrollTop: $("b").offset().top
        }, 1000);
});*/
