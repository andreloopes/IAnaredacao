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

    // Chatbot Typing Animation
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const textToType = "Me ajude a escrever essa reportagem";
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < textToType.length) {
                typingText.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 80); // Speed of typing
            } else {
                // Wait a bit, then restart animation to loop
                setTimeout(() => {
                    typingText.textContent = "";
                    charIndex = 0;
                    typeWriter();
                }, 4000); // 4 seconds before resetting
            }
        }

        // Start typing after a short delay
        setTimeout(typeWriter, 1000);
    }
});
