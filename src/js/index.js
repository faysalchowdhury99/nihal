//  Partner Slider
var swiper = new Swiper('.swiper-container.partner-slider', {
    autoplay: true,
    slidesPerView: 6,
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        },
    },
});

// Testimonial Slider
var swiper = new Swiper('.swiper-container.testimonial-slider', {
    effect: 'coverflow',
    initialSlide: 2,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 300,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            coverflowEffect: {
                stretch: 200,
            },
        },
        992: {
            coverflowEffect: {
                stretch: 780,
            },
        },
        1200: {
            coverflowEffect: {
                stretch: 770,
            },
        },
        1400: {
            coverflowEffect: {
                stretch: 900,
            },
        },
    },
    navigation: {
        nextEl: '.swiper-next-button',
        prevEl: '.swiper-prev-button',
    },
});
