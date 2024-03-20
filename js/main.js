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
$(document).ready(function() {
  // メニューの親要素がクリックされたときの処理
  $('.ddmenu > li').click(function(e) {
      // クリックされた要素の子要素のulを取得
      var submenu = $(this).children('ul');

      // クリックされた要素以外のすべてのサブメニューを非表示にする
      $('.ddmenu > li > ul').not(submenu).slideUp();

      // クリックされた要素のサブメニューが表示されていない場合は表示、表示されている場合は非表示にする
      submenu.slideToggle();

      // イベントの伝播を停止する（親要素や他の要素にイベントが伝わらないようにする）
      e.stopPropagation();
  });

  // メニュー以外の領域がクリックされたときの処理
  $(document).click(function() {
      // すべてのサブメニューを非表示にする
      $('.ddmenu > li > ul').slideUp();
  });

  // メニューがクリックされたときにイベントの伝播を停止しないようにする
  $('.ddmenu > li > ul').click(function(e) {
      e.stopPropagation();
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