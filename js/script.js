//sp・tab用ドロワーメニュー
$(function () {
    $('.p-header__open').on('click', function () {
        $('body').toggleClass('is-open');
        $('.l-main').toggleClass('overlay');
    });
    $('.p-nav__close').on('click', function () {
        $('body').removeClass('is-open');
        $('.l-main').removeClass('overlay');
    });
});