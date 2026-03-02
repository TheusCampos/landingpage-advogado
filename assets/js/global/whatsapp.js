(function () {
    window.WebPost = window.WebPost || {};

    window.WebPost.initWhatsApp = function initWhatsApp() {
        const btn = document.getElementById('whatsapp-btn');
        if (!btn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                btn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
            } else {
                btn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                btn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
            }
        });
    };
})();
