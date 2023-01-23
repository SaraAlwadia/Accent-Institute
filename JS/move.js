
$(document).ready(function() {

    $('.toggle-icons').click(function() {
        $('.links-menu').toggle("fast");
    });

    $('.toggle-icons').click(function() {
        $('.links-menu').addClass("toggle-active");
    });

    //Hide dropdown on page click

    $(document).on('click', function(e) {
        if (!$(".toggle-icons").is(e.target) && !$(".toggle-icons").has(e.target).length && $('.links-menu').hasClass('toggle-active')) {
            $('.links-menu').slideUp("fast");
            $('.links-menu').removeClass("toggle-active");
        }
    });


/*********** Scroll Top ***********/
    $('.arrow').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

});