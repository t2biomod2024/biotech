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

//Fixed
//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//headerの高さ以上になったら
			$('#header').addClass('fixed');//fixedというクラス名を付与
		}else{//それ以外は
			$('#header').removeClass('fixed');//fixedというクラス名を除去
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});