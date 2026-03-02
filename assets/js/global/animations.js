(function () {
    window.WebPost = window.WebPost || {};

    window.WebPost.initAnimations = function initAnimations() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
            document.documentElement.classList.add('aos-enabled');
        } else {
            console.warn('AOS library not loaded');
        }
    };
})();
