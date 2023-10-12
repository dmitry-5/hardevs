$(function() {
	//Якоря для навигации
	$('nav li').click(function(){
		var $anchor = $("section." + this.className.split(" ")[0]).offset();
		$('html, body').animate({ scrollTop: $anchor.top },2000);
		return false;
	});
	//slider
	$('#slider-reviews').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
	arrows: true,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
				arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				dots: true,
				arrows: false
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				dots: true,
				arrows: false
      }
    }
  ]
});
	//Якоря для навигации(menu)
	$('.header_burger').click(function(){
		$('nav, header').toggleClass('open');
		$(this).toggleClass('active')
		return false;
	});
	//homepage fv popup_catalog
	$('nav a.form').click(function(){
		$('.popup_catalog').addClass('open');
		$('#wrapper').addClass('popup');
		$('.popup_catalog .flex .box').addClass('active');
	});
	$('.popup .blocker').click(function(){
		$('.popup').removeClass('open');
		$('#wrapper').removeClass('popup');
		$('.popup_catalog .flex .box').removeClass('active');
	});
	//popups
	//close popup
	$('.popup .close').click(function(){
		$('.popup').removeClass('open');
		$('#wrapper').removeClass('popup');
	});
	$('.popup .line').click(function(){
		$('.popup').removeClass('open');
		$('#wrapper').removeClass('popup');
		$('.popup_catalog .flex .box').removeClass('active');
	});
	//slider-2
	$('#block').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
	variableWidth: true,
	arrows: true,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
				arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
				variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
				arrows: false
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				arrows: false
      }
    }
  ]
	});
});
