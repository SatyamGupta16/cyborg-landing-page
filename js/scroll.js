document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = document.querySelectorAll('section');

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinksContainer = document.querySelector('.nav-links');
                if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                }
            }
        });
    });

    // Scroll events for active link updating
    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY;

        // Active link
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // offset for navbar
            const sectionHeight = section.clientHeight;
            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                const currentId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
