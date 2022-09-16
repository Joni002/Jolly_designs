$( document ).ready(
	function() {
		$('.sudheader_slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			prevArrow: "<img src='img/svg/icons/icon-left.svg' class='prev' alt='1'>",
    		nextArrow: "<img src='img/svg/icons/icon-right.svg' class='next' alt='2'>",
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
	}
);
