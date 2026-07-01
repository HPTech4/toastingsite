const text = document.getElementById("text");
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const effectContainer = document.getElementById("effect-container");

let count = 0;

noButton.addEventListener("click", function (e) {
    e.preventDefault();
    count++;

    if (count === 1) {
        text.textContent = "I know you already feel it.";
    } else if (count === 2) {
        text.textContent = "You do not need to make it harder than it is.";
        this.classList.add("moveUp");
    } else if (count === 3) {
        text.textContent = "The answer has been waiting for you.";
        this.classList.add("moveDown");
    } else {
        text.textContent = "Some things are better left unspoken.";
        this.classList.add("hide");
    }
});

yesButton.addEventListener("click", function () {
    const effect = document.createElement("div");
    effect.className = "effect";
    effect.innerHTML = "♡";
    effect.style.left = `${Math.random() * 70 + 10}%`;
    effect.style.top = `${Math.random() * 40 + 10}%`;

    effectContainer.appendChild(effect);
    text.textContent = "That is exactly what I hoped for.";

    setTimeout(() => effect.remove(), 1400);
});

