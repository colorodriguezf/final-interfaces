// No se pedia en el trabajo, solo es un agregado visual
// no lo hice con html, css y js puro por el tiempo
$(document).ready(function() {
    $('.carousel').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow:8
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 5
                }
            },
        ]
    });

    let lastScrollY = window.scrollY;

    $(window).on("scroll", function () {
        let currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            $(".carousel").slick("slickNext");
        } else if (currentScrollY < lastScrollY) {
            $(".carousel").slick("slickPrev");
        }

        lastScrollY = currentScrollY;
    });
});
