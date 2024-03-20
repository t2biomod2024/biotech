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
  // ▼マウスが載ったらサブメニューを表示
  $("ul.ddmenu li").mouseenter(function(){
     $(this).siblings().find("ul").hide();  // 兄弟要素に含まれるサブメニューを全部消す。
     $(this).children().slideDown(150);     // 自分のサブメニューを表示する。
  });
  // ▼どこかがクリックされたらサブメニューを消す
  $('html').click(function() {
     $('ul.ddmenu ul').slideUp(150);
  });
});

