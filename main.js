window.onload = () => {
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
        document.body.classList.add("loaded");
    }, 1000);

    // Adiciona posição aleatória para vagalumes no Safari
    const fireflies = document.querySelectorAll('.firefly');
    fireflies.forEach(firefly => {
        firefly.style.left = Math.random() * 100 + 'vw';
        firefly.style.top = Math.random() * 100 + 'vh';
        firefly.style.animationDelay = Math.random() * 5 + 's';
    });
};
