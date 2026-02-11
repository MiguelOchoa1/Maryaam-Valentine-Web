// Valentine text sequence logic
const messages = [
    "So I've been meaning to ask you...",
    "You and I have been together for a while..",
    "I think you're really cute and...",
    "There is no one else I'd rather be with.",
    "So I'm about to ask you something",
    "And I really hope you dont say no...",
    "but its important that you're honest",
    "so here I go...",
    "3",
    "2",
    "1",
    "Wait but im lowkey nervous",
    "But I cant keep it in anymore",
    "Alright here it goes",
    "Maryaam...",
    "Will you be my...",
    "oogabooga! hahaha!",
    "lel",
    "jk",
    "Maryaam, will you be my Valentine?"
];

let msgIndex = 0;
let sequenceActive = false;

function fadeText(newText, showButtons = false) {
    title.style.transition = "opacity 0.6s";
    title.style.opacity = 0;
    setTimeout(() => {
        title.textContent = newText;
        title.style.opacity = 1;
        if (showButtons) {
            buttons.style.display = "flex";
            buttons.style.transition = "opacity 0.6s";
            buttons.style.opacity = 0;
            setTimeout(() => {
                buttons.style.opacity = 1;
            }, 50);
        }
    }, 600);
}

document.querySelector(".letter-window").addEventListener("click", function() {
    if (!sequenceActive) return;
    if (msgIndex < messages.length - 1) {
        msgIndex++;
        fadeText(messages[msgIndex], msgIndex === messages.length - 1);
    }
});
// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
        sequenceActive = true;
    }, 50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee! I love Maryaam!!!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
