$(function () {

    $('.popup i').on('click', function () {
        $('.popup').addClass('on');
    });


    $('.menu_i').on('click', function () {
        $('.nav_layout').toggleClass('on');
    });


    $(document).ready(function () {
        $(".menu_i").click(function () {
            var submenu = $(this).next(".menu>ul");


            if (submenu.is(":visible")) {
                submenu.slideUp();
            } else {
                submenu.slideDown();
            }
        }).mouseover(function () {
            $(this).next(".menu>ul").slideDown();
        });


    });


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('on');

        } else {
            $('.header').removeClass('on');
        }
    });


    $('.main_slide').slick({
        arrows: false,
        dots: true,
        autoplaySpeed: 4000,

    });


    $('.banner_slide').slick({
        arrows: false,
    });


    $('.mainBanner .arrows .prev').on('click', function () {
        $('.banner_slide').slick('slickPrev')
    });


    $('.mainBanner .arrows .next').on('click', function () {
        $('.banner_slide').slick('slickNext')
    });









});

