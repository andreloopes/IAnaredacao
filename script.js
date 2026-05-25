document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // Parallax effect on the interactive orbital elements based on mouse movement
    const orbitalContainer = document.querySelector('.interactive-orbital');
    const nodes = document.querySelectorAll('.icon-node');
    const center = document.querySelector('.orbital-center');

    if (orbitalContainer) {
        orbitalContainer.addEventListener('mousemove', (e) => {
            const rect = orbitalContainer.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Move the center element slightly
            center.style.transform = `translate(calc(-50% + ${x * 0.05}px), calc(-50% + ${y * 0.05}px))`;

            // Move the nodes with different speeds to create a 3D feel
            nodes.forEach((node, index) => {
                const speed = 0.08 + (index * 0.02);
                node.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });

        orbitalContainer.addEventListener('mouseleave', () => {
            // Reset transforms
            center.style.transform = `translate(-50%, -50%)`;
            nodes.forEach(node => {
                node.style.transform = `translate(0px, 0px)`;
            });
        });
    }
});
