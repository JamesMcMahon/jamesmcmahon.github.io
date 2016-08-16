jQuery.extend(jQuery.easing, {
  easeInOutExpo: function(x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
});

$(document).ready(function() {

  $('a[href="#"]').click(function(e) {
    e.preventDefault();
    $('nav').removeClass('visible');
    $('html,body').stop().animate({
      scrollTop: $('.' + $(this).data('scrollto')).offset().top - 65
    }, 700, 'easeInOutExpo', function() {});
  });

  $('.toggle-menu').click(function() {
    $('nav').toggleClass('visible');
  });

  var orgBackgroundColor = $('header').css('background-color');
  var orgLogoDisplay = $('header .logo').css('display');
  if ($(window).width() > 600) {
    $('header').css({
      'background': 'none'
    });
    $('header .logo').css({
        'display': 'none'
    });
  }
  $(document).scroll(function() {
    if ($(window).width() > 600) {
      $('header').css({
        'background': $(this).scrollTop() > 100 ? orgBackgroundColor : 'none'
      });
      $('header .logo').css({
          'display': $(this).scrollTop() > 100 ? orgLogoDisplay : 'none'
      });
    } else {
      $('header').css({
        'background': orgBackgroundColor
      });
      $('header .logo').css({
          'display': orgLogoDisplay
      });
    }
  });
});
