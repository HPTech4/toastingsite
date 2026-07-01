const text = document.getElementById("text");
const subtext = document.getElementById("subtext");
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const effectContainer = document.getElementById("effect-container");
const card = document.getElementById("card");
const page = document.getElementById("page");
const romanticMessage = document.getElementById("romantic-message");
const cinematicOverlay = document.getElementById("cinematic-overlay");
const letterScene = document.getElementById("letter-scene");
const letterContent = document.getElementById("letter-content");

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
  if (accepted) {
    return;
  }

  accepted = true;
  createHearts();
  page.classList.add("hide");
  card.classList.add("hide");
  romanticMessage.classList.remove("show");
  noButton.classList.add("hide");
  yesButton.textContent = "Yes, my forever";

  const letterParagraphs = [
    "My love, I have been trying to find the right words for this moment because you are not just another person in my life. You are the kind of woman who has touched my heart in a way that feels deep, lasting, and undeniable. When I think about you, I do not only think about your beauty, but about the peace you bring, the warmth you carry, the grace you reflect, and the way your presence makes life feel softer and more meaningful. There is something about you that stays with me long after the moment has passed, and I have come to realize that this feeling is not temporary. It is real, and it is growing every day.",
    "I admire the way you carry yourself, the calm in your spirit, the strength in your heart, and the kindness in your soul. You are beautiful in a way that goes beyond appearance, because true beauty is not only what the eyes can see. It is in the way you speak, the way you listen, the way you care, and the way you make people feel safe and valued. Your beauty is not shallow, it is deep. It is not loud, it is graceful. It is not just about how you look, but about the love you give and the light you bring into the lives of those around you.",
    "Your faith also means so much to me. There is a strength in the way you hold onto what matters, a quiet confidence in the way you stay grounded, and a sincerity in the way you live that I find deeply attractive. Faith is not just a belief to me; it is a reflection of character, purpose, and devotion. And when I see that in you, it makes me appreciate you even more. You do not just carry beauty, you carry meaning. You do not just live, you live with intention, and that is one of the most beautiful things about you.",
    "Then there is your character, and honestly, this is one of the things that makes my love for you feel so real. You are gentle, but not weak. You are strong, but not cold. You are compassionate, but not naive. You are kind, but not ordinary. The way you love, the way you think, the way you carry yourself, and the way you remain true to who you are even when life is difficult—these things speak volumes. You are rare, and the more I know you, the more I understand that the love I feel is not just for what you look like, but for who you truly are.",
    "And I cannot ignore the way you make me feel. There is something about your presence that makes my heart feel calm and alive at the same time. There is a softness in your energy that draws me closer, a spark in your spirit that I cannot explain, and a warmth in your company that makes ordinary moments feel special. The way you smile, the way you speak, the way you make silence feel meaningful, the way you make a room feel brighter—every part of you feels tender and magnetic to me. I have tried to understand it, but love is not always something that can be fully explained. Sometimes it just arrives, and when it does, it changes everything.",
    "I do not want to keep pretending that this is just a passing feeling. I do not want to hide from the truth of what my heart has been trying to say. I want to be honest with you, and I want to be honest with myself. I care for you deeply. I admire you deeply. And I have come to the point where I can no longer act like this is just a casual feeling. It is more than that. It is affection, attraction, devotion, and yearning all blended into a love that has become too real to ignore.",
    "If I could choose forever, I would choose forever with you. I would choose your laughter, your patience, your softness, your strength, your faith, your voice, your heart, and every beautiful part of your soul. I would choose to stand beside you through every season, to hold you in the moments that feel heavy, to celebrate you in the moments that feel light, and to remind you every day that you are loved, cherished, and deeply treasured. I would want to be the man who makes your life feel safer, sweeter, and more beautiful simply by being present in it.",
    "I know love is not only about words. It is about showing up. It is about consistency. It is about care. It is about making someone feel wanted, protected, and understood. That is what I want to offer you. Not a temporary feeling, not a careless promise, not a shallow connection, but a love that is steady, sincere, and lasting. A love that grows with time. A love that remains even when circumstances change. A love that is built on respect, loyalty, tenderness, and commitment.",
    "So if you are asking yourself what I am really saying, then let me say it plainly: I love you. I truly do. I love the way you are, the way you carry yourself, the way you light up the room, and the way you have become such a meaningful part of my heart. I would be honored to build something beautiful with you. I would be honored to love you with patience, devotion, and sincerity. And if you choose me, I will never take your love for granted. I will protect it, cherish it, and honor it with everything I have.",
    "You are not just someone I admire. You are someone I feel deeply for. You are not just a beautiful face or a lovely presence. You are a whole world of warmth, grace, strength, and tenderness, and I would be blessed to call you mine. I do not just want to love you in the easy moments. I want to love you in the quiet moments, in the hard moments, in the growing moments, and in every season that life brings. That is the kind of love I would give you. That is the kind of forever I would want with you.",
    "So tonight, I am laying my heart open before you. I am telling you that I see you, I value you, I adore you, and I would be so grateful to walk this life with you. If you choose me, I will make sure your heart feels safe. If you choose me, I will love you with all that I am. If you choose me, I will never stop choosing you with sincerity and devotion. My love for you is real, and my hope is that one day you will feel it in the deepest and most beautiful way possible.",
  ];

  letterContent.innerHTML = `
    <h2 class="letter-title">My Dearest Love</h2>
    ${letterParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <p><strong>You are my beautiful, faithful, remarkable, and unforgettable forever.</strong></p>
  `;

  letterScene.classList.add("show");
  cinematicOverlay.classList.add("show");

  setTimeout(() => {
    cinematicOverlay.classList.remove("show");
  }, 1200);
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
    text.textContent = "You still have one last chance, my love.";
    subtext.textContent =
      "If you truly feel what I feel, then let your heart choose what it already knows.";
    noButton.disabled = true;
    noButton.textContent = "Still thinking";
    noButton.classList.add("hide");
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
