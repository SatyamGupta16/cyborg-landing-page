/**
 * CYBERNEXUS - Custom Cursor & Mouse Glow
 */

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorGlow = document.querySelector('.custom-cursor-glow');
    const links = document.querySelectorAll('a, button, .interactive');

    // Move cursor and glow based on mouse position
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Animate custom cursor
        if(cursor) {
            // Slight delay for smooth effect using transform
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }

        if(cursorGlow) {
            // Slower delay for the glow
            cursorGlow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
        
        // Parallax elements
        const parallaxElements = document.querySelectorAll('.parallax-element');
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.05;
            const x = (window.innerWidth - mouseX * speed) / 100;
            const y = (window.innerHeight - mouseY * speed) / 100;
            el.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    });

    // Add hover states for interactive elements
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if(cursor) cursor.classList.add('hovering');
            if(cursorGlow) cursorGlow.classList.add('hovering');
        });
        
        link.addEventListener('mouseleave', () => {
            if(cursor) cursor.classList.remove('hovering');
            if(cursorGlow) cursorGlow.classList.remove('hovering');
        });
    });
});
