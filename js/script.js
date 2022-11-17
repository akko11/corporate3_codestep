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