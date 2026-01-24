document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector('.about');
    const frame = document.querySelector('.frame');
    const aboutText = document.querySelector('.about-text');

    if (!aboutSection || !frame || !aboutText) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                frame.classList.add('show');      // animation cadre
                aboutText.classList.add('show');  // animation texte
                observer.unobserve(aboutSection); // une seule fois
            }
        });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);
});
