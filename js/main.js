$(function () {
    // Slide Down Header Icon
    $(".header i").click(function () {
        $("html").animate({
            scrollTop: $(".features").offset().top
        }, 100);
    });

    // Show More In Our Works
    $(".our-works .container > button ").click(function () {
        $(".our-works .works .box.hide").fadeIn(1000);
    });

    // Next And Previus Chevrons
    var chevronRight = $(".testimonials .fa-chevron-right"),
        chevronLeft = $(".testimonials .fa-chevron-left");

    // Check Function
    function checkElements() {
        $(".testimonials .client:first").hasClass("active") ? chevronLeft.fadeOut(300) : chevronLeft.fadeIn(300);
        $(".testimonials .client:last").hasClass("active") ? chevronRight.fadeOut(300) : chevronRight.fadeIn(300);
    }
    checkElements();

    // Click Arrows
    $(".testimonials .container i").click(function () {
        var theClient = $(".testimonials .client.active");
        if ($(this).hasClass("fa-chevron-right")) {
            theClient.fadeOut(800, function () {
                $(this).removeClass("active").next().addClass("active").fadeIn(800);
                checkElements();
            });
        } else {
            theClient.fadeOut(800, function () {
                $(this).removeClass("active").prev().addClass("active").fadeIn(800);
                checkElements();
            });
        }
    });

    // Show Border Bottom
    $(".our-team .member").on("mouseenter", function () {
        $(this).children(".image").children("span").css("display", "block").animate({width: "100%"}, 300);
        $(this).children(".image").animate({
            top: "-20px"
        }, 300);
    });
    $(".our-team .member").on("mouseleave", function () {
        $(this).children(".image").children("span").animate({width: "0"}, 300).css("display", "none");
        $(this).children(".image").animate({
            top: "0"
        }, 300);
    });

    // Add Class Active To Shuffle Members
    $(".our-team li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

});