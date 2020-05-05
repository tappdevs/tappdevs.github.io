$(function () {


    $('.nav_toggler').on('click', function (e) {
        $('.sidenav').addClass('show');
    })
    $('.sidenav_items').on('click', function (e) {
        e.stopPropagation();
    })
    $('.sidenav').on('click', function (e) {
        $('.sidenav').removeClass('show');
    })
})