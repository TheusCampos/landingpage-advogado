(function () {
    window.WebPost = window.WebPost || {};

    window.WebPost.initSwiper = function initSwiper() {
        if (typeof Swiper !== 'undefined') {
            new Swiper('.trusted-swiper', {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                        centeredSlides: false,
                        loop: false,
                        autoplay: false,
                        allowTouchMove: false,
                    }
                }
            });
        } else {
            console.warn('Swiper library not loaded');
        }
    };
})();
