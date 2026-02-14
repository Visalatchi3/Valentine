const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const mainCard = document.getElementById("mainCard");
const loveCard = document.getElementById("loveCard");
const music = document.getElementById("bgMusic");

yesBtn.onclick = () => {
    mainCard.classList.add("hidden");
    loveCard.classList.remove("hidden");
    heartBlast();
    music.play();
};

noBtn.onmouseover = () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
};

function heartBlast() {
    setInterval(() => {
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.innerHTML = "💖";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.bottom = "-20px";
            heart.style.animationDuration = (1 + Math.random()) + "s";
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 2000);
        }
    }, 180);
}
