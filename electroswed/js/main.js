;(function () {
  'use strict';
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $('#electroswed-offcanvas, .js-electroswed-nav-toggle');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('.js-electroswed-nav-toggle').removeClass('active');
        }
      }
    });
  };
  var offcanvasMenu = function () {
    $('#page').prepend('<div id="electroswed-offcanvas" />');
    $('#page').prepend('<a href="#" class="js-electroswed-nav-toggle electroswed-nav-toggle electroswed-nav-white"><i></i></a>');
    var clone1 = $('.menu-1 > ul').clone();
    $('#electroswed-offcanvas').append(clone1);
    var clone2 = $('.menu-2 > ul').clone();
    $('#electroswed-offcanvas').append(clone2);
    $('#electroswed-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
    $('#electroswed-offcanvas').find('li').removeClass('has-dropdown');
    $('.offcanvas-has-dropdown').mouseenter(function () {
      var $this = $(this);
      $this.addClass('active').find('ul').slideDown(500, 'easeOutExpo');
    }).mouseleave(function () {
      var $this = $(this);
      $this.removeClass('active').find('ul').slideUp(500, 'easeOutExpo');
    });
    $(window).resize(function () {
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-electroswed-nav-toggle').removeClass('active');
      }
    });
  };
  var burgerMenu = function () {
    $('body').on('click', '.js-electroswed-nav-toggle', function (event) {
      var $this = $(this);
      if ($('body').hasClass('overflow offcanvas')) {
        $('body').removeClass('overflow offcanvas');
      } else {
        $('body').addClass('overflow offcanvas');
      }
      $this.toggleClass('active');
      event.preventDefault();
    });
  };
  var contentWayPoint = function () {
    var i = 0;
    $('.animate-box').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function () {
          $('body .animate-box.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated-fast');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated-fast');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight animated-fast');
              } else {
                el.addClass('fadeInUp animated-fast');
              }
              el.removeClass('item-animate');
            }, k * 200, 'easeInOutExpo');
          });
        }, 100);
      }
    }, {
      offset: '85%'
    });
  };
  var dropdown = function () {
    $('.has-dropdown').mouseenter(function () {
      var $this = $(this);
      $this.find('.dropdown').css('display', 'block').addClass('animated-fast fadeInUpMenu');
    }).mouseleave(function () {
      var $this = $(this);
      $this.find('.dropdown').css('display', 'none').removeClass('animated-fast fadeInUpMenu');
    });
  };
  var loaderPage = function () {
    $('.electroswed-loader').fadeOut('slow');
  };
  var sliderMain = function () {
    $('#electroswed-hero .flexslider').flexslider({
      animation: 'fade',
      slideshowSpeed: 5000,
      directionNav: true,
      start: function () {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      },
      before: function () {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      }
    });
  };
  var parallax = function () {
    if (!isMobile.any()) {
      $(window).stellar({
        horizontalScrolling: false,
        hideDistantElements: false,
        responsive: true
      });
    }
  };
  var owlCrouselFeatureSlide = function () {
    var owl = $('.owl-carousel1');
    owl.owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      smartSpeed: 500,
      navText: [
        '<i class=\'icon-arrow-left3 owl-direction\'></i>',
        '<i class=\'icon-arrow-right3 owl-direction\'></i>'
      ]
    });
  };
  $(function () {
    mobileMenuOutsideClick();
    offcanvasMenu();
    burgerMenu();
    contentWayPoint();
    sliderMain();
    dropdown();
    loaderPage();
    parallax();
    owlCrouselFeatureSlide();
  });
}());
