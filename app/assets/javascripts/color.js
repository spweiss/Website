$(function() {
   $(window).scroll(function () {
      if (top.location.pathname === "/") {
        if ($(this).scrollTop() > $(".page").height() * 0.70) {
           $("div").addClass("changeColorWhite")
        }
        if ($(this).scrollTop() < $(".page").height() * 0.70) {
           $("div").removeClass("changeColorWhite")
        }
        if ($(this).scrollTop() > $(".page").height() * 1.70) {
           $("div").addClass("changeColorTan")
        }
        if ($(this).scrollTop() < $(".page").height() * 1.70) {
           $("div").removeClass("changeColorTan")
        }
        if ($(this).scrollTop() > $(".page").height() * 2.70) {
           $("div").addClass("changeColorGrey")
        }
        if ($(this).scrollTop() < $(".page").height() * 2.70) {
           $("div").removeClass("changeColorGrey")
        }
        if ($(this).scrollTop() > $(".page").height() * 3.70) {
           $("div").addClass("changeColorCyan")
        }
        if ($(this).scrollTop() < $(".page").height() * 3.70) {
           $("div").removeClass("changeColorCyan")
        }
        if ($(this).scrollTop() > $(".page").height() * 4.70) {
           $("div").addClass("changeColorGreen")
        }
        if ($(this).scrollTop() < $(".page").height() * 4.70) {
           $("div").removeClass("changeColorGreen")
        }
      }
   });
});
