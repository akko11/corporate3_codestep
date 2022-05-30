//sp・tab用ドロワーメニュー
$(function () {
    $('.p-header__open').on('click', function () {
        $('body').toggleClass('is-open');
        $('.l-nav').removeClass('nav-close');
        $('.l-nav').toggleClass('nav-open');
        $('.l-main').toggleClass('overlay');
    });
    $('.p-nav__close').on('click', function () {
        $('body').removeClass('is-open');
        $('.l-nav').removeClass('nav-open');
        $('.l-nav').toggleClass('nav-close');
        $('.l-main').removeClass('overlay');
    });
});