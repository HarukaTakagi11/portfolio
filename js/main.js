// 穴埋め形式です。空いている箇所を埋めて実装してください

$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".toggle_btn").on("click", function () {
    $(".header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $('a[href^="#menu-"]').on("click", function () {
    $(".header").toggleClass("open");
  });

  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  function slide(addClassNm, position){
    var scroll = $(window).scrollTop();
    var target = $(position).offset().top;
    var windowHeight = $(window).height();

    if (scroll > target - windowHeight + $(position).outerHeight()) {
      // outerHeight()はpaddingを含めた高さを取得する
      $(position).addClass(addClassNm);
    }
  };
  
  $(window).scroll(function () {
  
    $(".voice-item").each(function () {
      slide("balloon", this);
    });

    $(".content-left").each(function () {
      slide("slide-to-right", this);
    });

    $(".content-right").each(function () {
      slide("slide-to-left", this);
    });
    
  });

});






