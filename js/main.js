
$(function () {
    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
      // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
      // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
      // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
      // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
      // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 1000, "swing");
      // urlが変化しないようにfalseを返す
    return false;
    });

    $(window).scroll(function () {
        // fadeinクラスに対して順に処理を行う
        $(".fadein").each(function () {
          // スクロールした距離
        let scroll = $(window).scrollTop();
          // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
          // 画面の高さ
        let windowHeight = $(window).height();
          // fadeinクラスの要素が画面下にきてから200px通過した
          // したタイミングで要素を表示
        if (scroll > target - windowHeight +100) {
            $(this).css("opacity", "1");
            $(this).css("transform", "translateY(0)");
        }
        });
    
    });
    

    $(window).on("load", function() {
        $('.mainvisual ').fadeIn(2000); 
    });

    // ハンバーガーメニュー

    $(".hamburger").on("click", function () {
        $("header").toggleClass("open"); 
    });
    
      // #maskのエリアをクリックした時にメニューを閉じる
    $("#mask").on("click", function () {
        $("header").removeClass("open");
    });
    
      // リンクをクリックした時にメニューを閉じる
    $("#navi a").on("click", function () {
        $("header").removeClass("open");
    });

});
