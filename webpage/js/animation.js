
console.log("Scroll animation JS loaded");

document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll('.reveal');

    // SAFETY CHECK
    if (!reveals.length) {
        console.warn("No .reveal elements found");
        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        },
        { threshold: 0.2 }
    );

    reveals.forEach(el => observer.observe(el));
});
