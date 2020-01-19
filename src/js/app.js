var $ = require('jquery');
require('bootstrap');

$(document).ready(function() {
    // Comportamento dell'header che cambia in base allo scroll
    $('.nav_header').removeClass('border');
    $('.nav_header').children('.container').removeClass('nobefore');
    $('.nav_header').removeClass('invisibile');
    $(window).scroll(function() {
        $('.navbar').addClass('invisibile');
        if ($(document).scrollTop() > 400) {
            $('.nav_header').children('.container').addClass('nobefore');
            $('.nav_header').addClass('border');
            $('.nav_header').removeClass('invisibile');
        }
        if ($(document).scrollTop() == 0) {
            $('.nav_header').removeClass('border');
            $('.nav_header').children('.container').removeClass('nobefore');
            $('.nav_header').removeClass('invisibile');
        }
    });
});
