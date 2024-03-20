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

//DropDownMenu
$(function(){
  $("ul.ddmenu li").hover(function(){
    $(">ul:not(:animated)",this).slideDown("fast")
  },
  function(){
    $(">ul",this).slideUp("fast")
  })
})

//Fixed
function FixedAnime() {
	var elemTop = $('#area-3').offset().top;
	var scroll = $(window).scrollTop();
	if(scroll <= 20){
			$('#header').removeClass('UpMove');
			$('#header').addClass('DownMove');

		}else{
			if($('#header').hasClass('DownMove')){
				$('#header').removeClass('DownMove');
				$('#header').addClass('UpMove');
			}
		}
}

$(window).scroll(function () {
	FixedAnime();
});

$(window).on('load', function () {
	FixedAnime();
});
