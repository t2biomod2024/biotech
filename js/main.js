// bx Slider
$(document).ready(function () {
    $('.slide-items').bxSlider();
  });

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
  $("ul.ddmenu li").mouseenter(function(){
    $(this).siblings().find("ul").hide();
    $(this).children().slideDown(150);
  });
  $('html').click(function() {
    $('ul.ddmenu ul').slideUp(150);
  });
});
