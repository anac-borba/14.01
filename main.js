window.onload = () => {
    // Gerar vagalumes aleatórios
    for (let i = 0; i < 20; i++) {
        const firefly = document.createElement("div");
        firefly.className = "firefly";
        firefly.style.left = Math.random() * 100 + "vw";
        firefly.style.top = Math.random() * 100 + "vh";
        firefly.style.animationDelay = Math.random() * 5 + "s";
        document.body.appendChild(firefly);
    }
};
