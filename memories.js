const heartsContainer =
    document.getElementById("hearts");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        Math.random() > 0.5
            ? "♡"
            : "♥";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 18 + 10) + "px";

    heart.style.animationDuration =
        (Math.random() * 6 + 7) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 13000);
}


setInterval(
    createHeart,
    650
);