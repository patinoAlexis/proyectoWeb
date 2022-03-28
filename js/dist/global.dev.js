"use strict";

$(document).ready(function () {
  $('.op-nav').click(function () {
    var scrollTo;

    switch ($(this).text()) {
      case 'Videojuegos':
        scrollTo = '#videojuegos';
        break;

      case 'Futbol':
        scrollTo = '#futbol';
        break;

      case 'Esports':
        scrollTo = '#esports';
        break;

      case 'Programacion':
        scrollTo = '#programacion';
        break;
    }

    $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top
    }, 10);
    /*
    let position = scrollTo.offset().top;
    console.log($('html, body').scrollTop());
    $('html, body').animate({scrollTop: position}, 0);*/
  });
  $(window).resize(function size_html() {
    var size = $('.main-header').width();

    if (size <= 1800) {
      if (size <= 1200) {
        $('img').css("height", 220);
        $('.sub-seg').css('width', '100%');
        $('h3').css('font-size', '1.2rem');
      } else {
        $('img').css("height", 300 / 1800 * size);
      }
    } else {
      $('img').css("height", 300);
    }
  });

  if ($(window).width() <= 1800) {
    if ($(window).width() <= 1200) {
      $('img').css("height", 220);
      $('.sub-seg').css('width', '100%');
      $('h3').css('font-size', '1.2rem');
    } else {
      $('img').css("height", 300 / 1800 * size);
    }
  } else {
    $('img').css("height", 300);
  }
});