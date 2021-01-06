//Scroll function
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() - 200 > 0) {
            $('#top').fadeIn('fast'); // show
        } else {
            $('#top').fadeOut('fast'); // hide
        }
    });
});

//Activation Scroll
$(function () {
    $("#top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
    });
});
