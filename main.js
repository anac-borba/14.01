window.onload = () => {
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
        document.body.classList.add("loaded");
    }, 500);

    for (let i = 0; i < 15; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = Math.random() * 100 + 'vw';
        firefly.style.top = Math.random() * 100 + 'vh';
        firefly.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(firefly);
    }
};
