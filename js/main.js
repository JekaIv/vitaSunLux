$(document).ready(function () {
    //СЛАЙДЕР
    $('.color-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.reviews').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //TABS
    $(".question").each(function (index, item) {
        $(item).on('click', function () {
            $(this).siblings(".answer").slideToggle();
            $(this).find('span').toggleClass("close")
        });
    });

    //SCROLL
    $(".scroll-to-form").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: $('.block-8 h2').offset().top - 80}, 400);
    });

    $(".first-button").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: $('.block-2').offset().top - 80}, 400);
    });

    //error-input

    $('form').on('submit', function (submit) {
        submit.preventDefault();
        let form = $(this),
            inputName = form.find('input[name=name]'),
            inputPhone = form.find('input[name=phone]'),
            buttonSubmit = form.find('button');


        if (inputName.val().length < 1 || inputPhone.val().length < 1) {
            if (inputName.val().length < 1) {
                inputName.css('border-color', 'red');
                setTimeout(function () {
                    inputName.css('border-color', '#fff');
                }, 10000)
            }
            if (inputPhone.val().length < 1) {
                inputPhone.css('border-color', 'red');
                setTimeout(function () {
                    inputPhone.css('border-color', '#fff');
                }, 10000)
            }
            return false
        } else {
            inputName.css('border-color', '#fff');
            inputPhone.css('border-color', '#fff');
            buttonSubmit.attr('disabled', true);
            window.location.href = 'success.html'
            // $('body').css('overflow', 'hidden');
        }
    });
    // $('.close').click(function () {
    //     $('.success').fadeOut();
    //     $('body').css('overflow', 'inherit');
    // });
});
