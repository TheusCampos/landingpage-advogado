(function () {
    const safeCall = (fn) => {
        if (typeof fn === 'function') fn();
    };

    document.addEventListener('DOMContentLoaded', () => {
        const api = window.WebPost || {};
        safeCall(api.initAnimations);
        safeCall(api.initNavigation);
        safeCall(api.initWhatsApp);
        safeCall(api.initSwiper);
    });
})();
