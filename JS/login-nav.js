$(document).ready(function() {

    // Profile Menu
    $('.prof-img').click(function() {
        $('.profile-menu').toggle("fast");
    });

    $('.prof-img').click(function() {
        $('.profile-menu').addClass("profile-menu-active");
    });

    //Hide dropdown on page click

    $(document).on('click', function(e) {
        if (!$(".prof-img").is(e.target) && !$(".prof-img").has(e.target).length && $('.profile-menu').hasClass('profile-menu-active')) {
            $('.profile-menu').slideUp("fast");
            $('.profile-menu').removeClass("profile-menu-active");
        }
    });
});