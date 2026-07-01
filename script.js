const text = document.getElementById("text");
const subtext = document.getElementById("subtext");
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const effectContainer = document.getElementById("effect-container");
const card = document.querySelector(".card");
const romanticMessage = document.getElementById("romantic-message");

let count = 0;
let accepted = false;

function createHearts() {
  card.classList.remove("celebrate-card");
  void card.offsetWidth;
  card.classList.add("celebrate-card");

  for (let i = 0; i < 6; i++) {
    const effect = document.createElement("div");
    effect.className = "effect";
    effect.innerHTML = i % 2 === 0 ? "♡" : "✦";
    effect.style.left = `${Math.random() * 70 + 10}%`;
    effect.style.top = `${Math.random() * 40 + 10}%`;
    effect.style.color = i % 2 === 0 ? "#ffd6e1" : "#ffffff";
    effect.style.fontSize = `${18 + Math.random() * 12}px`;

    effectContainer.appendChild(effect);
    setTimeout(() => effect.remove(), 1400);
  }
}

function showFinalMessage() {
  accepted = true;
  document.body.classList.add("revealed");
  card.classList.add("revealed");
  createHearts();
  noButton.classList.add("hide");
  yesButton.textContent = "Yes, my forever";
  text.textContent = "Then let this be my promise to you.";
  subtext.textContent =
    "Because you are not just someone I adore—you are the one I would choose again and again.";

  const finalLines = [
    "You are beautiful in a way that makes my whole world softer and sweeter.",
    "Your faith is a light that brings peace, grace, and quiet strength into every part of my heart.",
    "Your character is rare—gentle, loyal, kind, and deeply beautiful in the truest sense.",
    "The way you move through this life carries a warmth and charm that feels almost unreal, yet so real to me.",
    "And the way you make me feel is something I can only describe as love, longing, and forever all at once.",
  ];

  romanticMessage.innerHTML = `
        <ul>
            ${finalLines.map((line) => `<li>${line}</li>`).join("")}
        </ul>
        <p class="final-paragraph">My love, you are the kind of woman who makes a man believe in destiny. Your beauty captivates me, your spirit steadies me, your heart completes me, and your presence makes life feel softer, brighter, and more meaningful. I would cherish you, honor you, protect you, and love you with every beat of my heart for the rest of my life. You are not just my choice—you are my forever.</p>
    `;
  romanticMessage.classList.add("show");
}

noButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (accepted) {
    return;
  }

  count++;

  if (count === 1) {
    text.textContent = "Please don’t say that, baby.";
    subtext.textContent =
      "You know I would never play with something this real, this deep, this lasting.";
    this.classList.add("moveUp");
  } else if (count === 2) {
    text.textContent = "You are the love of my life.";
    subtext.textContent =
      "I’m not trying to pressure you, but I can’t pretend I don’t feel this strongly.";
    this.classList.add("moveDown");
  } else if (count === 3) {
    text.textContent = "You still have one more chance, my love.";
    subtext.textContent =
      "If you truly feel what I feel, then let your heart choose what it already knows.";
    this.classList.add("hide");
    yesButton.textContent = "Yes, my forever";
  } else {
    text.textContent = "I will still choose you, always.";
    subtext.textContent =
      "Because some loves are not meant to be questioned—they are meant to be cherished.";
  }
});

yesButton.addEventListener("click", function () {
  showFinalMessage();
});
