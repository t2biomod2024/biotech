// Commonlize
fetch("https://t2biomod2024.github.io/biotech/page_parts/header.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("body").insertAdjacentHTML('afterbegin', data));
fetch("https://t2biomod2024.github.io/biotech/page_parts/footer.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("body").insertAdjacentHTML('afterend', data));

// Loading reset
window.addEventListener('load', function () {
  document.querySelector('.loading-overlay').style.display = 'none';
});

// topic-slider
$(function () {
    $(".topic-slider").slick({
      autoplay: true,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: "15%",
      dots: true,
    });
});

// news-slider
var slider;
var sliderFlag = false;
var breakpoint = 768;
  
function sliderSet() {
        var windowWidth = window.innerWidth;
        if (windowWidth >= breakpoint && !sliderFlag) {
            slider = $('.news-slider').bxSlider({
            touchEnabled:false,
			mode: 'vertical',
			controls: false,
			auto: 'true',
			pager: false
		});
            sliderFlag = true;
        } else if (windowWidth < breakpoint && sliderFlag) {
            slider.destroySlider();
            sliderFlag = false;
        }
    }

$(window).on('load resize', function() {
    sliderSet();
});

//Fixed
function FixedAnime() {
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){
			$('#header').addClass('fixed');
		}else{
			$('#header').removeClass('fixed');
		}}

$(window).scroll(function () {
	FixedAnime();
});

$(window).on('load', function () {
	FixedAnime();
});