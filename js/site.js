$(function () {
  //clients-slick in home page
  if (
    $('#Clients .slick-wrapper').length > 0 ||
    $('#Clients .slick-wrapper-ar').length > 0
  ) {
    $('#Clients .slick-wrapper').slick({
      autoplay: false,
      arrows: false,
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerPadding: '0',
      rows: 2,
      autoplaySpeed: 3000,
    });
    $('#Clients .slick-wrapper-ar').slick({
      autoplay: false,
      arrows: false,
      dots: true,
      rtl: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerPadding: '0',
      rows: 2,
      autoplaySpeed: 3000,
    });
  }

  //our project home page
  $('#Portfolio .slick-wrapper').slick({
    autoplay: false,
    arrows: false,
    dots: false,
    infinite: false,
    swipe: false,
    slidesToScroll: 2,
    slidesToShow: 2,
    rows: 2,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
          rows: 1,
          dots: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          rows: 1,
          dots: true,
        },
      },
    ],
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  });

  $('#Serivces .slick-wrapper').slick({
    autoplay: false,
    arrows: false,
    dots: false,
    swipe: false,
    infinite: false,
    slidesToScroll: 2,
    slidesToShow: 2,
    rows: 2,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
          rows: 1,
          dots: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          rows: 1,
          dots: true,
        },
      },
    ],
  });
});

//clients in about page
if ($('.internal-clients.internal-mobile').length > 0) {
  var swiper = new Swiper('.myclient.Mobile', {
    pagination: {
      el: '.swiper-pagination.swiper-pagination-client',
      clickable: true,
    },
    slidesPerView: 5,
    slidesPerColumn: 4,
    paginationClickable: true,
    spaceBetween: 25,
    breakpoints: {
      1195: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      988: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      762: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      390: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
}
//clients in details services
if ($('.internal-clients').length > 0) {
  var swiper = new Swiper('.myclient-services', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 5,
    slidesPerColumn: 2,
    paginationClickable: true,
    spaceBetween: 25,
    breakpoints: {
      1195: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      988: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      762: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      390: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
}
//clients in details services
if ($('.internal-clients').length > 0) {
  var swiper = new Swiper('.myclient-services2', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 25,
    breakpoints: {
      1195: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      988: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      762: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      390: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
}

//accordion + & -
if ($('.about-us').length > 0) {
  $(document).ready(function () {
    $('#accordion .card .card-header').click(function () {
      $(this).toggleClass('open');
      $(this).parent().prevAll().find('.card-header').removeClass('open');
      $(this).parent().nextAll().find('.card-header').removeClass('open');
    });
  });
}

//counter
if ($('.facts').length > 0) {
  var a = 0;
  $(window).scroll(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      a = 1;
    }
  });
}
//animation image in about page
if ($('.big-picture').length > 0) {
  var s = skrollr.init();
}
if ($('.partners-scroll').length > 0) {
  var s = skrollr.init();
}
//filter in works page
if ($('.filtr-item').length > 0) {
  var didntFire = true;

  $('#portfolio')
    .imagesLoaded(function () {
      //$("#portfolio h3").removeClass("d-none");
    })
    .progress(function (instance, image) {
      if (didntFire) {
        if ($('.filtr-container').length > 0) {
          $('.filtr-container').filterizr();

          didntFire = false;
        }
      }
    });
}
if ($('#Portfolio .filtr-item').length > 0) {
  $('#Portfolio .filtr-container').filterizr();
}
$(function () {
  $("#portfolio .filtr-item img[id*='img']").unveil(500, function () {
    let ID = $(this).attr('id');

    $(this).imagesLoaded(function () {
      setTimeout(function () {
        $("#portfolio .filtr-item img[id*='" + ID + "']")
          .parents()
          .siblings()
          .children('h3')
          .removeClass('d-none');
        $("#portfolio .filtr-item img[id*='" + ID + "']").removeClass(
          'hideImg'
        );
        $("#portfolio .filtr-item img[id*='" + ID + "']")
          .next('.animated-background')
          .css('display', 'none');
      }, 1000);
    });
  });
});

$(document).ready(function () {
  $('.sm-q , .show_qouta').click(function () {
    $('.forkit-curtain ').toggleClass('show-form');
  });
  $('.close-button').click(function () {
    $('.forkit-curtain ').removeClass('show-form');
  });
});

//light-box
if ($('.latest-work,.samples').length > 0) {
  $(function () {
    $('#portfolio').magnificPopup({
      delegate: ':not(.filteredOut) a',
      type: 'image',
      image: {
        cursor: null,
        titleSrc: 'title',
      },
      gallery: {
        enabled: true,
        preload: [0, 1],
        navigateByImgClick: true,
      },
    });
  });
}

//filter
if ($('.latest-work').length > 0) {
  $(document).ready(function () {
    $('.my-filter').click(function () {
      $('.my-filter').removeClass('active');
      $(this).addClass('active');
    });
  });
}
//form details services
if ($('.header').length > 0) {
  (function () {
    if (!String.prototype.trim) {
      (function () {
        // Make sure we trim BOM and NBSP
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function () {
          return this.replace(rtrim, '');
        };
      })();
    }

    [].slice
      .call(
        document.querySelectorAll('input.input__field,textarea.input__field')
      )
      .forEach(function (inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
          classie.add(inputEl.parentNode, 'input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
      });

    function onInputFocus(ev) {
      classie.add(ev.target.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
      if (ev.target.value.trim() === '') {
        classie.remove(ev.target.parentNode, 'input--filled');
      }
    }
  })();
}

//if ($('.header').length > 0) {
//    $(function () {
//        window.prettyPrint && prettyPrint()
//        $(document).on('hover', '.yamm .dropdown-menu', function (e) {
//            e.stopPropagation()
//        })
//    })
//}

//if ($('.header').length > 0) {
//    $(function () {
//        $("#demo-1").bootstrapDropdownOnHover();
//        $("#demo-2").bootstrapDropdownOnHover({
//            mouseOutDelay: 50
//        });
//        $("#demo-3").bootstrapDropdownOnHover({
//            responsiveThreshold: 768
//        });
//    });
//}
//height sercvies section
if ($('.services-page').length > 0) {
  $(function () {
    $('.section-servies').addClass('invisible');
    $('.web-solutions').height($('.laptop').height());
    $('.web-applications').height($('.cont-web').height());
    $('.mobile-services').height($('.mobile-application').height());
    $(window).resize(function () {
      $('.web-solutions').height($('.laptop').height());
      $('.web-applications').height($('.cont-web').height());
      $('.mobile-services').height($('.mobile-application').height());
    });
  });
  $(window).on('load', function () {
    setTimeout(function () {
      window.dispatchEvent(new Event('resize'));
    }, 200);
    $('.section-servies').removeClass('invisible');
  });
}

//$(document).ready(function () {
//    $(".dropdown").hover(function () {
//        $(this).find(".dropdown-menu").css({
//            backgroundColor: "red",
//            display: "block",
//            transition: "all .5s",
//        });
//    }, function () {
//        $(this).find(".dropdown-menu").css({
//            backgroundColor: "yellow",
//            display: "none",
//            transition: "all .5s",
//        });
//    });
//         });

//$(document).ready(function () {
//    $(".dropdown").hover(function () {
//        $(this).find(".dropdown-menu").fadeOut();
//    }, function () {
//        $(this).find(".dropdown-menu").fadeOut();
//    });
//});

//$('.svg-convert').svgConvert({
//    onComplete: function () {
//        console.log("Finished Converting SVG's");
//        $("svg").css("display", "block");
//        $('img[src$=".svg"]').css("display", "block");
//    }
//});

$('nav .navbar-nav .dropdown.nav-item .nav-link').hover(function () {
  //$('.overlayMenu').removeClass("d-none");
  $('.overlayMenu').fadeIn();
});
$('nav .navbar-nav .dropdown.nav-item').mouseleave(function () {
  //$('.overlayMenu').addClass("d-none");
  $('.overlayMenu').fadeOut();
});

$('nav .navbar-nav .dropdown .dropdown-menu.animated.fadeInDown').mouseleave(
  function () {
    if (isHovered('.navbar-nav .arrow-down')) {
      $('.overlayMenu').fadeIn();
    } else {
      $('.overlayMenu').fadeOut();
    }
  }
);

function isHovered(selector) {
  return $(selector + ':hover').length > 0;
}

$(function () {
  $('.top-header').show();
  if ($(this).scrollTop() > 100) {
    $('.top-header').css({
      opacity: '0',
      pointerEvents: 'none',
    });
  }
});

var lastScrollTop = 0;

$(window).scroll(function (event) {
  if ($(this).scrollTop() > lastScrollTop && $(this).scrollTop() > 100) {
    // downscroll code
    $('.top-header').css({
      opacity: '0',
      pointerEvents: 'none',
    });
  } else {
    // upscroll code
    $('.top-header').css({
      opacity: '1',
      pointerEvents: 'auto',
    });
  }
  lastScrollTop = $(this).scrollTop();
});

$(window).on('resize', function () {
  if ($(window).width() > 991) {
    $('.swiper-pagination-works').addClass('d-none');
    //$('#Portfolio .swiper-slide ').css("margin-right", "0px");
    //$('#Portfolio .5-Items').removeClass("d-none");
  } else {
    //$('#Portfolio .swiper-pagination-works').removeClass("d-none");
    //$('#Portfolio .5-Items').addClass("d-none");
    //if (!$('#Portfolio .swiper-container').hasClass("swiper-container-horizontal")) {
    //    GetPortfolioSwiper();
    //}
  }
});

//Create your works  home page in small screen
//if ($('#Portfolio').length > 0) {
//        GetPortfolioSwiper();
//}
//swiper - pagination swiper - pagination - works swiper - pagination - clickable swiper - pagination - bullets
//function GetPortfolioSwiper() {
//    if ($(window).width() < 992) {
//        $('.swiper-pagination-works').removeClass("swiper-pagination-clickable").removeClass("swiper-pagination-bullets");
//        $('.swiper-pagination-works').children().remove();
//        $('#Portfolio .swiper-pagination-works').removeClass("d-none");
//        $('#Portfolio .5-Items').addClass("d-none");
//        var swiper = new Swiper('.swiper-works', {
//            slidesPerView: 1,
//            spaceBetween: 30,
//            pagination: {
//                el: '.swiper-pagination-works',
//                clickable: true,
//            },
//            breakpoints: {
//                1024: {
//                    slidesPerView: 2,
//                    spaceBetween: 30
//                },

//                767: {
//                    slidesPerView: 1,
//                    spaceBetween: 30
//                },
//                640: {
//                    slidesPerView: 1,
//                    spaceBetween: 30
//                },
//                575: {
//                    slidesPerView: 1,
//                    spaceBetween: 30
//                }
//            }
//        });

//    } else {
//        $('.swiper-pagination-works').addClass("d-none");
//        $('#Portfolio .swiper-slide ').css("margin-right", "0px");
//        $('#Portfolio .5-Items').removeClass("d-none");
//    }
//}

$(window).on('resize', function () {
  if ($(window).width() > 991) {
    $('.swiper-pagination-services').addClass('d-none');
  } else {
    $('.swiper-pagination-services').removeClass('d-none');
  }
});

//Create your works  home page in small screen

//$('form[id="Join"],form[id="Message"],form[id="Request"]').submit(function () {
//    $this = this;
//    if (!$(this).valid()) {
//        $('[id*="-error"]').each(function () {
//            var $inputId = $(this).attr("id").split("-")[0];
//            $($this).children().find("#" +$(this).attr("id")).parent().addClass('d-none');
//            $($this).children().find("input#" + $inputId).parent().addClass('error');
//            });
//            return false;
//        }
//        return true;
//});
////$('form[id="Feedback"] input,form[id="Qoute"] input,form[id="Request"] input').keyup(function () {
////    var id = $(this).attr("id");
////    var errorId = $(this).parent('form').find("#" + id + "-error").text();
////    console.log(errorId);
////});

//$('form[id="Feedback"],form[id="Qoute"]').submit(function () {
//    $this = this;
//    if (!$(this).valid()) {
//        $('[id*="-error"]').each(function () {
//            var $inputId = $(this).attr("id").split("-")[0];
//            $($this).children().find("#" + $(this).attr("id")).parent().addClass('d-none');
//            $($this).children().find("input#" + $inputId).addClass('simple-error');
//        });
//        return false;
//    }
//    return true;
//});
$(window).on('load', function () {
  $('main .isolayer').css('display', 'block');
});
$(function () {
  var urlV = window.location.search;
  if (urlV !== '' && urlV !== null) {
    getId(urlV);
    var item = $(
      '.simplefilter  li[data-filter=' + urlV.replace('?s', '') + ']'
    );
    $(document).ready(function () {
      item.click();
      $('main .isolayer').css('display', 'block');
    });
  }
});
function getId(urlV) {
  $('.simplefilter  li').removeClass('active');
  var item = $('.simplefilter  li[data-filter=' + urlV.replace('?s', '') + ']');
  item.addClass('active');
}

// masonry
var $grid = $('.gallery-wrapper').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  transitionDuration: 0,
});

$grid.imagesLoaded().progress(function () {
  $grid.masonry();
});