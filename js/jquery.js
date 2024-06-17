$(document).ready(function () {

    $('#nav-mobile').hide();

    $('#menu, .list-mobile li').click(function () {

        var menu1 = './images/menu.png';
        var menu2 = './images/menu-close.png';

        if ($(this).attr('src') == menu1) {
            $('#nav-mobile').slideDown();
            $(this).attr('src', menu2);
        }

        else {
            $('#nav-mobile').slideUp();
            $(this).attr('src', menu1);
        }

        // $('#nav-mobile').slideToggle();

    });


    /* Carousel */

    var i = 1;

    $(".column").each(function () {
        $(this).attr('id', i++);
    });


    var j = 1;

    $("#arrow-left").click(function () {
        $('.carousel').animate({ scrollLeft: $('#' + j-- + '').offset().left });
    });

    $("#arrow-right").click(function () {
        $('.carousel').animate({ scrollLeft: $('#' + j++ + '').offset().left });
    });

});