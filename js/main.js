// bx Slider
$(document).ready(function () {
    $('.slide-items').bxSlider();
  });


// Commonlize
fetch("https://t2biomod2024.github.io/biotech/page_parts/header.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("body").insertAdjacentHTML('afterbegin', data));
fetch("https://t2biomod2024.github.io/biotech/page_parts/footer.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("main").insertAdjacentHTML('afterend', data));

// Loading reset
window.addEventListener('load', function () {
  document.querySelector('.loading-overlay').style.display = 'none';
});

//Fixed
function FixedAnime() {
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){
			$('#header').addClass('fixed');
		}else{
			$('#header').removeClass('fixed');
		}
}

$(window).scroll(function () {
	FixedAnime();
});

$(window).on('load', function () {
	FixedAnime();
});


// News Slider
$('.slider').bxSlider({
	touchEnabled:false,
	mode: 'vertical',
	controls: false,
	auto: 'true',
	pager: false
	});
	
	

