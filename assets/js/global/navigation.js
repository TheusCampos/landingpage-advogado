(function () {
    window.WebPost = window.WebPost || {};

    window.WebPost.initNavigation = function initNavigation() {
        const nav = document.getElementById('navbar');
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const iconPath = mobileBtn?.querySelector('svg path');
        
        if (!nav) return;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                nav.classList.add('glass-nav', 'py-4');
                nav.classList.remove('py-6');
            } else {
                nav.classList.remove('glass-nav', 'py-4');
                nav.classList.add('py-6');
            }
        });

        if (mobileBtn && mobileMenu) {
            let isOpen = false;

            const toggleMenu = () => {
                isOpen = !isOpen;
                if (isOpen) {
                    mobileMenu.classList.remove('translate-x-full');
                    document.body.style.overflow = 'hidden';
                    if (iconPath) iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                } else {
                    mobileMenu.classList.add('translate-x-full');
                    document.body.style.overflow = '';
                    if (iconPath) iconPath.setAttribute('d', 'M4 8h16M4 16h16');
                }
            };

            mobileBtn.addEventListener('click', toggleMenu);

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (isOpen) toggleMenu();
                });
            });
        }
    };
})();
