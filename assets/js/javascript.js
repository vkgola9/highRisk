$(document).ready(function () {

    // employment-links svg class add & remove
    $(".employment-links a:nth-child(2)").mouseenter(function () {
        $(".employment-links svg:first").addClass("employment-links-svg-hover");
    })
    $(".employment-links a:nth-child(2)").mouseleave(function () {
        $(".employment-links svg:first").removeClass("employment-links-svg-hover");
    })
    $(".employment-links a:nth-child(5)").mouseenter(function () {
        $(".employment-links svg:nth-child(4)").addClass("employment-links-svg-hover");
    })
    $(".employment-links a:nth-child(5)").mouseleave(function () {
        $(".employment-links svg:nth-child(4)").removeClass("employment-links-svg-hover");
    })

    // industry-news date get
    var date = new Date().toLocaleDateString();
    $("#time").html(date);

    var b = date.replace("/", " ");
    var c = b.replace("/", ",");
    var d = c.slice(1)
    let month;
    switch (new Date().getMonth()) {
        case 0:
            month = "Janurary";
            break;
        case 1:
            month = "febrary";
            break;
        case 2:
            month = "march";
            break;
        case 3:
            month = "april";
            break;
        case 4:
            month = "may";
            break;
        case 5:
            month = "june";
            break;
        case 6:
            month = "july";
            break;
        case 7:
            month = "august";
            break;
        case 8:
            month = "september";
            break;
        case 9:
            month = "october";
            break;
        case 10:
            month = "november";
            break;
        case 11:
            month = "december";
            break;
        default:
            month = "Error";
    }
    $(".date").html(`${month.toUpperCase()} ${d}`);

    // bottom bar year get
    var year = new Date().getFullYear();
    $("#year").html(year)

    // footer svg class add & remove
    $(".footer-logo .svg-1 a").mouseenter(function () {
        $(".footer-logo .svg-1 svg").addClass("footer-logo-svg");
    })
    $(".footer-logo a").mouseleave(function () {
        $(".footer-logo .svg-1 svg").removeClass("footer-logo-svg");
    })
    $(".footer-logo .svg-2 a").mouseenter(function () {
        $(".footer-logo .svg-2 svg").addClass("footer-logo-svg");
    })
    $(".whatsapp a img").mouseenter(function () {
        $(".whatsapp a img").addClass("footer-logo-svg");
    })
    $(".whatsapp a img").mouseleave(function () {
        $(".whatsapp a img").removeClass("footer-logo-svg");
    })
    $(".footer-logo a").mouseleave(function () {
        $(".footer-logo .svg-2 svg").removeClass("footer-logo-svg");
    })

    $(window).scroll(function () {
        if (window.scrollY >= 500) {
            $("header").addClass('sticky');
            $(".top svg").addClass('sticky-to');
            $(".navbar-brand img").addClass('sticky-img');
        }
        else if (window.scrollY <= 450) {
            $(".top svg").removeClass('sticky-to');
            $("header").removeClass('sticky');
            $(".navbar-brand img").removeClass('sticky-img');
        }
    });

    $('.owl-one').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: `fadeOut`,
        animateIn: `fadeIn`,

    });
})