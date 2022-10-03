$(document).ready(function () {
  // Sliders
  $('.sudheader_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: "<img src='img/svg/icons/icon-left.svg' class='sudheader_prev' alt='1'>",
    nextArrow: "<img src='img/svg/icons/icon-right.svg' class='sudheader_next' alt='2'>",
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.discover_slider').slick({
    infinite: true,
    dots: true,
    prevArrow: "<img src='img/svg/icons/icon-left-big.svg' class='discover_prev' alt='1'>",
    nextArrow: "<img src='img/svg/icons/icon-right-big.svg' class='discover_next' alt='2'>",
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: false
      }
    }]
  });
  $('.bestseller_slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        centerMode: false
      }
    }]
  });
  $('.favorite_slider').slick({
    infinite: true,
    slidesToShow: 2,
    prevArrow: "<img src='img/svg/icons/icon-left-yellow.svg' class='favorite_prev' alt='1'>",
    nextArrow: "<img src='img/svg/icons/icon-right-blue.svg' class='favorite_next' alt='2'>",
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: false
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1.03,
        prevArrow: "<img src='img/svg/icons/icon-left-yellow.svg' class='favorite_prev' alt='1'>",
        nextArrow: "<img src='img/svg/icons/icon-right-mobile.svg' class='favorite_next' alt='2'>"
      }
    }]
  });
  $('.meets_slider').slick({
    infinite: true,
    waitForAnimate: false,
    slidesToShow: 1,
    prevArrow: "<img src='img/svg/icons/icon-left-yellow.svg' class='meets_prev' alt='1'>",
    nextArrow: "<img src='img/svg/icons/icon-left-yellow.svg' class='meets_next' alt='2'>",
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: false
      }
    }]
  });
  $('.meets_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.meets_slider_tab').removeClass('active');
    nextSlide == 0 ? $('#0').addClass('active') : nextSlide == 1 ? $('#1').addClass('active') : $('#2').addClass('active');
  });
  $('.meets_slider_tabs .meets_slider_tab').click(function () {
    let $this = $(this);
    $('.meets_slider_tab').removeClass('active');
    $($this).addClass('active');
    $('.meets_slider').slick('slickGoTo', $this.data('index'));
  });
  $('.categories_slider').slick({
    infinite: false,
    waitForAnimate: false,
    slidesToShow: 4,
    arrows: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        variableWidth: true
      }
    }]
  });
  $('.follow_slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.retailer_slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    rows: 2,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000
  });
  $('.quiet_books_content').slick({
    arrows: false,
    responsive: [{
      breakpoint: 2000,
      settings: 'unslick'
    }, {
      breakpoint: 767,
      settings: {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      }
    }]
  }); // Like button

  $('.like_icon').click(function () {
    if ($(this).attr('src') == 'img/svg/icons/icon-wish.svg') {
      $(this).attr('src', 'img/svg/icons/icon-wish_fill.svg');
    } else {
      $(this).attr('src', 'img/svg/icons/icon-wish.svg');
    }
  }); // Burger button

  $('.header__burger').click(function () {
    $('.header__burger,.nav,.main_panel,.sudheader,.bottom_tools').toggleClass('active');
    $('body').toggleClass('lock');
  }); // Open modal button

  $('.discover_buttons .pink_button').click(function () {
    $('.order__modal').addClass('modal_active');
    $('body').addClass('lock');
  }); // Close modal

  $('.order__modal_content').click(function (event) {
    event.stopPropagation();
  });
  $('.order__modal, .order__modal_close').click(function () {
    $('.order__modal').removeClass('modal_active');
    $('body').removeClass('lock');
  });
});
//# sourceMappingURL=app.js.map
