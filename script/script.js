$(document).ready(function () {
    $(".map-link").click(function () {
        event.preventDefault();
        $(".map").css("z-index" , "5");
    });

    $(".map .btn-close").click(function () {
        event.preventDefault();
        $(".map").css("z-index" , "-10");
    });

    $(".main-nav__link--login").click(function () {
        event.preventDefault();
        $(".login-form").css("z-index" , "5")
    });

    $(".login-form .btn-close").click(function () {
        event.preventDefault();
        $(".login-form").css("z-index" , "-10");
    });

    $(".pagination__item").click(function () {
        event.preventDefault();
        $(this).addClass("pagination__item--active")
            .siblings().removeClass("pagination__item--active");
    })
}); //--> ready ending