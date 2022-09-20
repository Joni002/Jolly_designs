$( document ).ready(
	function() {

		// Sliders
		$('.sudheader_slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			prevArrow: "<img src='img/svg/icons/icon-left.svg' class='sudheader_prev' alt='1'>",
    		nextArrow: "<img src='img/svg/icons/icon-right.svg' class='sudheader_next' alt='2'>",
			responsive:[
				{
					breakpoint: 1200,
					settings: {
						slidesToShow:2
					}
				},
				{
					breakpoint: 750,
					settings: {
						slidesToShow:1
					}
				}
				]
		  });

		$('.discover_slider').slick({
			infinite: true,
			dots: true,
			prevArrow: "<img src='img/svg/icons/icon-left-big.svg' class='discover_prev' alt='1'>",
    		nextArrow: "<img src='img/svg/icons/icon-right-big.svg' class='discover_next' alt='2'>",
		});

		$('.bestseller_slider').slick({
			infinite: true,
			dots: true,
			slidesToShow: 1,
			centerMode: true,
			arrows: false,
			variableWidth: true
		});

		$('.favorite_slider').slick({
			infinite: true,
			slidesToShow: 1,
			prevArrow: "<img src='img/svg/icons/icon-left-yellow.svg' class='favorite_prev' alt='1'>",
    		nextArrow: "<img src='img/svg/icons/icon-right-blue.svg' class='favorite_next' alt='2'>",
		});

		$('.meets_slider').slick({
			infinite: true,
			waitForAnimate: false,
			prevArrow: "<img src='img/svg/icons/icon-left-yellow.svg' class='meets_prev' alt='1'>",
    		nextArrow: "<img src='img/svg/icons/icon-left-yellow.svg' class='meets_next' alt='2'>",
		})
		$('.meets_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.meets_slider_tab').removeClass('active');
			nextSlide == 0 ? $('#0').addClass('active') : nextSlide == 1 ? $('#1').addClass('active') : $('#2').addClass('active');
		});
		$('.meets_slider_tabs .meets_slider_tab').click(function() {
			let $this = $(this);

			$('.meets_slider_tab').removeClass('active');
			$($this).addClass('active');
			
			$('.meets_slider').slick('slickGoTo', $this.data('index'))
		});

		$('.categories_slider').slick({
			infinite: false,
			slidesToShow: 4,
			arrows: false,
		})

		$('.follow_slider').slick({
			infinite: false,
			slidesToShow: 6,
			slidesToScroll: 6,
			arrows: false,
		})

		// Like button
		$('.like_icon').click(function() {
			if($( this ).attr('src') == 'img/svg/icons/icon-wish.svg'){
				$( this ).attr('src', 'img/svg/icons/icon-wish_fill.svg');
			}
			else{
				$( this ).attr('src', 'img/svg/icons/icon-wish.svg');
			}
		});
	}
);
