//sp用ハンバーガーメニュー
jQuery(function ($) {
    $(".js-hamburger").on("click", function () {
        $(this).next().slideToggle(200);
        $(this).toggleClass("is-open");
        $(".p-headercontents__list").toggleClass("is-open");
        $(".p-hamburger__overlaymask").toggleClass("is-open");
    });
});

//スクロール位置700pxを超えたところでpagetopを表示
jQuery(function ($) {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 700) {
            $('.p-footercontents__pagetop').fadeIn(700);
        } else {
            $('.p-footercontents__pagetop').fadeOut(700);
        }
    });
});