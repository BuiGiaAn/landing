$(document).ready(function () {
    var swiper = new Swiper(".myFshop", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: false,
        autoplay: false,
        allowTouchMove: false,

        allowSlideNext: false,
        allowSlidePrev: false
        // slidesPerView: 3

    });
    var swiper2 = new Swiper(".myFshop2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next-fshop",
            prevEl: ".swiper-button-prev-fshop",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    var swiperBanner = new Swiper(".topBanner", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".topBanner-pagination",
            clickable: true,
        },
    });

    // lightGallery(document.getElementById('animated-thumbnails-gallery'), {
    //     thumbnail: true,
    // });

    var swiperNews = new Swiper(".myNews", {
        // slidesPerView: 3,
        // spaceBetween: 30,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        slidesPerView: 3.8,
        centeredSlides: true,
        spaceBetween: 30,
        slideToClickedSlide: true,
        // roundLengths: true,
        loop: true,
        // loopAdditionalSlides: 30,
        navigation: {
            nextEl: ".swiper-button-next-news",
            prevEl: ".swiper-button-prev-news",
        },
    });

    var swiperNews = new Swiper(".myNews2", {
        // slidesPerView: 3,
        // spaceBetween: 30,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        slidesPerView: 1.4,
        centeredSlides: true,
        spaceBetween: 30,
        slideToClickedSlide: true,
        // roundLengths: true,
        loop: true,
        // loopAdditionalSlides: 30,
        navigation: {
            nextEl: ".swiper-button-next-news",
            prevEl: ".swiper-button-prev-news",
        },
    });


    let gallery = document.getElementById('gallery')
    lightGallery(gallery, {
        controls: true,
        counter: true,
        download: true,
        plugins: [lgZoom, lgRotate]

    })

});
